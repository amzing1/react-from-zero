# 个人 React 知识地图

> 日期：2026-11-18 | 基线：React 19.3.1 / Next.js 16
> 掌握度标记：🟢 会用 · 🟡 会用但细节不稳（需查/需练） · 🔵 只知道名词 · ⚪ 没接触
>
> 说明：这是 Day 001–004 的实际练习基线，不是能力评价。每完成一个阶段回来更新。

## 一、版本时间线

| 版本 | 主线（一句话） | 代表 API | 我的掌握度 |
|---|---|---|---|
| 19.0 | Actions + RSC 稳定 | `useActionState`、`useOptimistic`、`use()`、ref as prop | 🔵 知道名词 |
| 19.1 | 调试与 Suspense 改进 | `captureOwnerStack()`、Suspense hydration | ⚪ 没接触 |
| 19.2 | 可见性、Effect 事件、性能 | `Activity`、`useEffectEvent`、`cacheSignal` | Activity 🟡（跑过 demo）；其余 🔵 |
| 19.3 | 视图过渡、Fragment ref、浏览器边界 | `ViewTransition`、Fragment refs、`browser()` | 🔵 知道名词 |

## 二、三层清单

### 日常 API

- 组件、JSX、props、children：🟡（Day 003 写过 Card/UserCard）
- state / 快照 / 不可变更新：🟡（Day 002 写过 Todo；`console.log` 读快照仍不稳）
- 列表、key、条件渲染：🟡（Todo 列表；key 的选择还需练）
- 事件、受控表单：🟡（Todo 输入框、回车添加；`v-model` 对照待练）
- Context：🟡（ThemeProvider/useTheme；value 引用与重渲染细节错过一次）
- Effect / cleanup：🟡（Modal 的 Escape 监听与清理；依赖数组细节待补）
- memo / useMemo / useCallback：🟡（Day 001 实验过 memo；手写时机不熟）

### 并发与新范式

- `useTransition` / `startTransition`：🔵
- `useDeferredValue`：🔵
- Suspense：🔵（知道异步边界，没写过）
- Actions（`useActionState` / `useFormStatus`）：🔵
- `useOptimistic`：🔵
- `use()`：🔵
- `Activity`：🟡（Day 004 跑过 hidden/visible demo）
- `useEffectEvent`：🔵
- `ViewTransition`：🔵

### 框架与底层

- RSC / Server Components：🔵
- Server Actions：🔵
- React Compiler：🔵
- Fiber / Render / Commit：🔵（知道 render/commit 两阶段；commit 子阶段不熟）
- Scheduler / Lane：⚪
- Next.js App Router：⚪

## 三、生态选型

| 领域 | 默认选择 | 何时换 | 我的掌握度 |
|---|---|---|---|
| 组件内状态 | `useState` / `useReducer` | 逻辑复杂 → reducer / 状态机 | 🟡 |
| 跨层共享 | Context | 高频变化 → 拆分/下移或换 store | 🟡 |
| 全局客户端状态 | Zustand | 大团队/严格调试 → RTK；原子化 → Jotai；流程 → XState | 🔵 |
| 服务端状态 | TanStack Query / SWR | 需要缓存、失效、Mutation、无限滚动 | 🔵 |
| 路由 | React Router v7 / Next App Router | 类型安全 → TanStack Router；全栈/RSC → Next | 🔵 |
| 表单 | react-hook-form + zod | 简单表单/渐进增强 → React 19 Actions | 🔵 |
| 样式 | Tailwind / CSS Modules | 设计系统 → Radix/shadcn + cva | 🔵 |
| 测试 | Vitest + RTL + MSW；Playwright | 单元/集成/E2E 分层 | ⚪ |
| 构建 / 元框架 | Vite / Next.js | 全栈 → Next；RN → Expo | Vite 🟡；Next ⚪ |

## 四、下一步

选 3 个 🔵 / ⚪ 的项，写出对应课时与验证方式：

1. **Actions / useActionState** — Day 037；做一个表单提交 + pending/error 的 demo
2. **RSC / Server Components** — Day 067 / 073；用 Next.js 16 写一个 Server/Client 边界示例
3. **测试：Vitest + RTL** — Day 028 / 061；给 TodoDemo 补 3 个测试（渲染、添加、删除）

> 备注：React 19 的新范式（Actions/RSC/Compiler/并发）对大多数只用过 React 18 及以前的开发者同样是新内容；不要把「不熟 19 新特性」等同于「不会 React」。当前基线是：日常 Hooks 能写但细节不稳，新范式与生态需要系统补。
