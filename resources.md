# 精选学习资源

> 原则：**官方文档优先，一主题最多精读 1–2 篇外部文章，然后动手**。资源在精不在多，收藏不等于学会。
>
> 版本提示：React 19.3 / Next.js 16（2026-11）。旧教程中关于 `useMemo` 默认滥用、类组件生命周期、Pages Router 的内容要批判性阅读。

## 一、官方文档（必读）

| 资源 | 用途 | 阶段 |
|---|---|---|
| [React 官方中文文档](https://zh-hans.react.dev/learn) | 核心概念、Hooks、最佳实践，第一优先 | 全程 |
| [React 英文文档](https://react.dev/learn) | 最新内容通常先更新在英文站 | 全程 |
| [React Blog](https://react.dev/blog) | 19.x 新特性、版本变更、升级指南 | 全程 |
| [React 19.3 发布说明](https://react.dev/blog/2026/09/09/react-19-3) | 19.3 稳定 API 与行为变化 | 阶段 2/4 |
| [React Compiler](https://react.dev/learn/react-compiler) | Compiler 的规则、迁移与限制 | 阶段 2 |
| [Server Components 参考](https://react.dev/reference/rsc/server-components) | RSC 的官方定义与边界 | 阶段 4 |
| [Next.js 文档](https://nextjs.org/docs) | App Router、缓存、Server Actions | 阶段 4 |
| [Next.js Learn](https://nextjs.org/learn) | 官方全栈教程 | 阶段 4 |
| [React 版本策略](https://react.dev/community/versioning-policy) | 理解 stable/canary/experimental | 全程 |

## 二、心智模型与最佳实践

| 资源 | 说明 |
|---|---|
| [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) | 必读。Effect 滥用的权威解药 |
| [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) | Dan Abramov，理解依赖与闭包的经典长文 |
| [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/) | 从运行时视角理解 React 的心智模型 |
| [overreacted.io](https://overreacted.io/) | Dan Abramov 博客，React 设计思想与 RSC 讨论 |
| [Josh Comeau 博客](https://www.joshwcomeau.com/) | 交互式讲解，CSS/React 心智模型质量很高 |
| [patterns.dev — React](https://www.patterns.dev/react) | 组件模式、渲染模式、性能模式 |
| [Kent C. Dodds 博客](https://kentcdodds.com/blog) | 测试、Hooks、组件设计、工程实践 |
| [Nadia Makarevich / developerway](https://developerway.com/) | 重渲染、memo、性能诊断的深度文章 |
| [React re-renders guide](https://www.developerway.com/posts/react-re-renders-guide) | 重渲染原因与优化路径 |

## 三、并发、React 19 与 RSC

| 资源 | 说明 |
|---|---|
| [React 19 发布说明](https://react.dev/blog/2024/12/05/react-19) | Actions、use()、useOptimistic、RSC 等 |
| React 19.2 / 19.3 Blog | `<Activity>`、`useEffectEvent`、`<ViewTransition>` 等 |
| [React Conf 官方频道](https://www.youtube.com/@reactconf) | 并发、RSC、Compiler 的一手设计动机 |
| “A Cartoon Intro to Fiber” — Lin Clark | Fiber 架构的经典可视化演讲，先建立直觉 |
| [TanStack Query 文档](https://tanstack.com/query/latest) | 服务端状态的事实标准，阶段 3 主线 |
| [TkDodo 博客](https://tkdodo.eu/blog) | TanStack Query 维护者，缓存/乐观更新/最佳实践 |
| [React Router 文档](https://reactrouter.com/) | v7 数据路由、loader/action |
| [TanStack Router](https://tanstack.com/router/latest) | 类型安全路由 |

## 四、生态与工程化

### 状态管理

| 资源 | 说明 |
|---|---|
| [Zustand](https://zustand.docs.pmnd.rs/) | 轻量全局状态，阶段 3 重点 |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 规范化状态管理，理解 reducer/action 体系 |
| [Jotai](https://jotai.org/) | 原子化状态，细粒度订阅 |
| [XState](https://stately.ai/docs) | 状态机/状态图，复杂流程建模 |

### 路由、表单、样式

| 资源 | 说明 |
|---|---|
| [React Router v7](https://reactrouter.com/) | 数据路由与框架模式 |
| [react-hook-form](https://react-hook-form.com/) | 高性能表单 |
| [zod](https://zod.dev/) | 运行时校验与类型推导 |
| [Tailwind CSS](https://tailwindcss.com/docs) | 原子化样式 |
| [shadcn/ui](https://ui.shadcn.com/) | 可复制组件 + 设计系统模式 |
| [Radix UI](https://www.radix-ui.com/) | 无样式可访问性原语 |
| [cva](https://cva.style/) | 组件变体 API |
| [Storybook](https://storybook.js.org/) | 组件文档与隔离开发 |

### 测试与质量

| 资源 | 说明 |
|---|---|
| [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | 用户行为视角的组件测试 |
| [Vitest](https://vitest.dev/) | 单元/集成测试 |
| [Playwright](https://playwright.dev/) | E2E 与跨浏览器测试 |
| [MSW](https://mswjs.io/) | 网络层 mock |
| [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) | 无障碍交互模式权威指南 |
| [axe](https://www.deque.com/axe/) | 自动化可访问性检查 |

### 构建、性能与监控

| 资源 | 说明 |
|---|---|
| [Vite](https://vite.dev/) | 开发与构建 |
| [web.dev Core Web Vitals](https://web.dev/vitals/) | 性能指标与优化 |
| [Sentry React](https://docs.sentry.io/platforms/javascript/guides/react/) | 错误监控与性能追踪 |
| [TypeScript 文档](https://www.typescriptlang.org/docs/) | 类型工程化 |

## 五、底层原理与源码

### 英文 / 通用

| 资源 | 说明 |
|---|---|
| [Build your own React](https://pomb.us/build-your-own-react/) | 一步步实现 Fiber、reconciliation、hooks，阶段 5 主线 |
| [React 源码仓库](https://github.com/facebook/react) | 重点关注 `packages/react-reconciler`、`packages/react-dom`、`packages/scheduler` |
| [React internals — indepth.dev](https://indepth.dev/) | Max Koretskyi 的源码系列，搜索 “React internals” |
| [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture) | Andrew Clark 的 Fiber 设计文档 |
| Lin Clark — “A Cartoon Intro to Fiber” | 可视化理解 Fiber 双缓冲与工作循环 |
| [React 19.3 源码 Tag](https://github.com/facebook/react/tree/v19.3.1) | 对照版本读源码，避免 main 分支漂移 |

### 中文

| 资源 | 说明 |
|---|---|
| [React 技术揭秘（卡颂）](https://react.iamkasong.com/) | 中文源码解析经典，Fiber、Hooks、Scheduler 全覆盖 |
| [图解 React（7kms）](https://github.com/7kms/react-illustration-series) | 图示化源码系列，适合建立结构感 |
| 卡颂《React 设计原理》/ B 站课程 | 系统化原理课程，可作为源码阅读的辅助 |
| 掘金 / 知乎 React 源码专栏 | 只作为补充，注意版本，优先对照 v19.3 源码 |

> 读源码建议：**先跑起来 → 打断点 → 带着问题读**。不要从第一行开始通读。

## 六、课程（可选，付费）

| 资源 | 说明 |
|---|---|
| [Epic React](https://www.epicreact.dev/) — Kent C. Dodds | 工程实践与 Hooks 深入，质量高 |
| [The Joy of React](https://www.joyofreact.com/) — Josh Comeau | 心智模型与交互式教学，适合打基础 |
| [Frontend Masters](https://frontendmasters.com/) | 并发、性能、RSC 等专题课程 |
| 极客时间 / 掘金小册 | 中文专题，按需购买，避免囤课 |

## 七、面试资源

- React 官方文档的 “Reference” 部分：每个 Hook 的边界与陷阱，就是面试追问来源
- `learning-plan.md` 每阶段的“面试追问”标注
- 自己的 `notes/mistakes.md`：比任何题库都更有针对性
- 建议自建题库：每个主题准备“是什么 / 为什么 / 什么时候用 / 底层怎么做 / 踩过什么坑”

## 八、使用建议

1. **每个主题的固定路径**：官方文档 → 一篇深度文章 → 动手实现 → 闭卷复述。
2. **不要同时看多套教程**，完成一个再换。
3. **视频只用于建立直觉**，源码和细节必须回到文档/代码。
4. **遇到版本差异**：以 `react.dev` 当前文档和对应版本源码为准。
5. **收藏夹不是进度**：`progress.md` 才是。
