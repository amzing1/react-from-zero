# 个人前端工程基线（React）

> 建立日期：2026-11-20 | 项目：`projects/react-lab`
> 实测版本：Node v24.11.1 / pnpm 11.0.9；React 19.3.1；Vite 8.3.8；TypeScript 7.0.2；oxlint 1.93.0；Prettier 3.10.1

## 一、五层基线

| 层 | 本项目选型 | 职责 | 失败时的症状 |
|---|---|---|---|
| 运行时 | Node 24+ / pnpm | 装依赖、跑脚本 | 依赖装不上、脚本跑不了 |
| 构建 | Vite 8 + `@vitejs/plugin-react` 6（Oxc） | 转换、HMR、打包 | 白屏、产物异常 |
| 类型 | TypeScript 7（project references） | 静态检查、编辑器提示 | 编辑器报红 / CI 失败 |
| 质量 | oxlint + Prettier | 规则检查、格式统一 | review 噪音、低级 bug |
| 调试 | React DevTools + sourcemap | 定位重渲染、错误栈 | 知道有 bug 但找不到 |

**心法**：五层要能独立执行、独立排错。`lint` 不负责类型，`typecheck` 不负责风格，`build` 不应是唯一检查入口。

## 二、可直接复制的配置

### 2.1 scripts

```jsonc
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "typecheck": "tsc -b",
  "lint": "oxlint",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

日常顺序：`pnpm typecheck && pnpm lint && pnpm build`；提交前加 `pnpm format:check`。

### 2.2 tsconfig.app.json（严格项）

```jsonc
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["ES2023", "DOM"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "types": ["vite/client"],

    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    "verbatimModuleSyntax": true,
    "erasableSyntaxOnly": true,
    "allowImportingTsExtensions": true,
    "moduleDetection": "force",
    "noEmit": true,
    "skipLibCheck": true,

    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

- `strict` 包含：`noImplicitAny`、`strictNullChecks`、`strictFunctionTypes`、`strictBindCallApply`、`strictPropertyInitialization`、`noImplicitThis`、`alwaysStrict`、`useUnknownInCatchVariables`
- `noUncheckedIndexedAccess`：索引访问返回 `T | undefined`；新项目建议开，老项目迁移噪音大
- `verbatimModuleSyntax`：类型导入必须写 `import type`，保证单文件转译时类型导入被擦除
- `erasableSyntaxOnly`：禁止 `enum`、`namespace` 等需要运行时代码的语法，与 Oxc/esbuild 单文件转译对齐

### 2.3 路径别名：两份配置缺一不可

```ts
// vite.config.ts
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

```jsonc
// tsconfig.app.json
"paths": { "@/*": ["./src/*"] }
```

- 只配 `tsconfig.paths`：编辑器不报错，但 dev 运行时报 `Failed to resolve import`
- 只配 Vite alias：能跑，但 `tsc` 类型检查和编辑器提示失败

### 2.4 Prettier

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 80
}
```

`.prettierignore` 至少包含：

```
dist
node_modules
pnpm-lock.yaml
```

### 2.5 oxlint

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

本课修掉的两个真实 warning：

1. `react/only-export-components`：`ThemeProvider.tsx` 同时导出组件和 `useTheme` → 拆出 `theme-context.ts`
2. `react-hooks/exhaustive-deps`：`Modal` 的 Effect 用 `onClose` 但依赖为 `[]` → 改为 `[onClose]`

需要类型感知规则时，再加 `oxlint-tsgolint` 或局部引入 ESLint；不要同时上两套 formatter。

### 2.6 环境变量与类型

`.env.example`（提交）与 `.env.local`（不提交）：

```
VITE_APP_TITLE=React Lab
```

`src/vite-env.d.ts`：

```ts
/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}
```

使用：

```tsx
<h1>{import.meta.env.VITE_APP_TITLE}</h1>
```

**实测结论**：

- 环境变量在 `import.meta.env` 下，不是 `import.meta` 下
- Vite 8 默认的 `ImportMetaEnv` 带字符串索引签名，拼错变量名**不会**报类型错误
- 声明 `ViteTypeOptions.strictImportMetaEnv` 后索引签名关闭，拼错才会报错
- Vite 只加载 `.env`、`.env.local`、`.env.[mode]`、`.env.[mode].local`；`.env.example` 只是模板
- 修改 `.env` 后要重启 dev server

## 三、新项目初始化 checklist

1. **脚手架与版本**：`pnpm create vite <name> --template react-ts`；确认 Node/pnpm 版本；`pnpm install`
2. **类型与别名**：开 `strict` + `noUncheckedIndexedAccess`；配 `paths` 与 Vite alias；`pnpm typecheck` 通过
3. **质量与脚本**：Prettier + `.prettierignore`；oxlint 规则；`lint` / `format` / `typecheck` / `build` 四条脚本
4. **环境与调试**：`.env.example` + `vite-env.d.ts`；确认 sourcemap；安装 React DevTools
5. **提交前**：`pnpm format:check && pnpm lint && pnpm typecheck && pnpm build`

## 四、调试工作流

### React DevTools

- **Highlight updates when components render**：Components → 齿轮 → 勾选；页面操作时闪烁的组件即发生重渲染
- **Profiler**：录制一次交互 → 看 commit 列表 → 点组件条 → 右侧 “Why did this render?”
- “Why did this render?” 默认不采集，需要在 **Profiler 设置的齿轮**里勾选 “Record why each component rendered while profiling”
- StrictMode 的双 render 在 render 阶段，**不会**多出一次 commit；一次点击通常对应一次 commit

### 本次实测

- 点击 Demo（三次 `setN(n+1)`）按钮：Demo 闪烁一次，Profiler 产生 **1 次 commit**
- 这说明：批处理把两次 `setN` 合成一次更新；StrictMode 双调用不产生第二次 commit

### sourcemap 策略

| 场景 | 配置 | 说明 |
|---|---|---|
| dev | 默认开启 | 断点直接落在 TS/TSX |
| 生产 + 错误监控 | `build.sourcemap: "hidden"` | 生成 .map 但不加注释，私有上传 Sentry |
| 公共开源站点 | `true` | 接受源码可见 |
| 不想暴露 | `false` | 只有压缩后的行列号 |

## 五、Vue 对照

| Vue 生态 | React 生态 | 关键差异 |
|---|---|---|
| Vite + `@vitejs/plugin-vue` | Vite + `@vitejs/plugin-react` | SFC 编译 vs JSX 转换；HMR 思路一致 |
| `vue-tsc` | `tsc -b` | Vue 模板类型靠 vue-tsc；React 的 JSX 由 tsc 检查 |
| `@/` alias（vite + tsconfig） | 相同 | 都是双份配置 |
| ESLint + eslint-plugin-vue | oxlint / ESLint + react 插件 | React 重点是 Hooks 规则 |
| Vue DevTools | React DevTools | Profiler / Highlight updates 是定位重渲染主力 |
| `unplugin-auto-import` | 少见 | React 倾向显式 import，利于可读性与类型 |

## 六、遗留问题

- `exactOptionalPropertyTypes` 是否开启：更严格，但第三方类型常不兼容，按团队情况
- 类型感知 lint：`oxlint-tsgolint` 还是 ESLint？先不引入，等规则需求明确
- 生产 sourcemap 与 Sentry 的接入流程（阶段 3 错误监控课）
- React Compiler 是否在模板中默认开启（阶段 2 课时 041）
- `browser()` 的正式渠道状态：19.3 已提供导出，但官方文档仍标 Canary，生产使用前核对
- Vite 8 构建内核（Rolldown）与 dev 转换器（Oxc）的官方说明：已由安装日志间接确认，后续查官方文档补链接

## 七、可复制的最小初始化命令

```bash
pnpm create vite my-app --template react-ts
cd my-app
pnpm install
pnpm add -D prettier
# 然后按 2.1–2.6 粘贴配置
pnpm typecheck && pnpm lint && pnpm build
```
