# 18 周 React 系统学习计划

> 每天约 2 小时 · 每周 6 天 · 共 108 个课时
> 版本基线：React 19.3 / Next.js 16（2026-11 核对，以官方最新文档为准）

## 一、你的起点与目标

**起点**

- 多年 Vue 生态经验：Vue 2/3、Composition API、Pinia、Vue Router、组件库、构建工具
- React 基础使用：JSX、组件、props、state、useEffect 大致会用
- 薄弱点：最新 Hooks、并发特性、React 19 新范式、工程最佳实践、底层原理

**目标**

1. 能独立、规范地用 React 完成中大型前端项目，并做出合理的架构与选型
2. 掌握 React 19 时代的核心 API、并发特性、RSC 与主流生态
3. 能讲清楚 React 的渲染、调度、Hooks、Suspense、RSC 实现原理
4. 能应对 React 相关面试中的使用题、原理追问与手写题
5. 能把 Vue 经验迁移到 React，并反哺团队

## 二、能力模型

| 维度 | 初级目标 | 结业目标 |
|---|---|---|
| React 核心 | 会写组件和 Hooks | 能解释渲染模型并做出正确状态设计 |
| 并发与新范式 | 知道 Transition | 能判断何时用并发特性、Actions、Compiler |
| 生态 | 会用一个状态库和请求库 | 能根据场景组合状态/数据/路由/表单/样式方案 |
| 工程化 | 能跑起来项目 | 测试、CI、部署、监控、性能预算齐全 |
| 原理 | 知道 Fiber 概念 | 能读源码、手写 mini-React、解释调度与 Suspense |
| 表达 | 能写业务代码 | 能做技术选型、分享、面试表达 |

## 三、设计原则

1. **心智模型优先**：先理解 React 为什么这样设计，再记 API。
2. **Vue 对照**：每个核心概念都建立 Vue ↔ React 映射，利用已有经验，同时警惕错误类比。
3. **项目驱动**：每个阶段都有可验收产出，避免“看懂了但写不出”。
4. **使用与原理交替**：先会用，再拆开看；原理阶段会回扣前面的使用经验。
5. **输出倒逼输入**：笔记、测验、代码 review、最终文章/分享。
6. **间隔复习**：1/3/7/15 天复习队列 + 每周/每阶段闭卷测验，对抗遗忘。
7. **诚实进度**：没掌握就不勾选，薄弱点进入复习队列。

## 四、总览

| 阶段 | 周次 | 课时 | 主题 | 里程碑产出 |
|---|---|---|---|---|
| 0 · 起跑 | 第 1 周 | 001–006 | 诊断、Vue→React 心智模型、工程基线 | 学习系统 + 弱项清单 |
| 1 · React 核心 | 第 2–5 周 | 007–030 | 组件、状态、Effect、Hook、模式、性能、测试 | 项目 A/B/C + 阶段测验 |
| 2 · 并发与新范式 | 第 6–7 周 | 031–042 | 并发渲染、Transition、React 19 Actions、Compiler | 性能报告 + 项目 D |
| 3 · 生态与工程化 | 第 8–11 周 | 043–066 | 状态、服务端状态、路由、表单、样式、测试、CI | 项目 E/F + 选型报告 |
| 4 · Next.js 与 RSC | 第 12–13 周 | 067–078 | App Router、缓存、Server Actions、RSC、SSR | 项目 G + 框架选型报告 |
| 5 · 底层原理 | 第 14–16 周 | 079–096 | 手写 mini-React、Fiber、Scheduler、Lane、Hooks、Suspense | mini-React + 源码笔记 |
| 6 · 综合与输出 | 第 17–18 周 | 097–108 | Capstone、迁移策略、面试专题、技术输出 | 线上项目 + 文章/分享 |

## 五、每日 2 小时节奏

| 时间 | 内容 | 说明 |
|---|---|---|
| 0–10 min | 检索热身 | 上次内容 2–3 题 + 到期复习项，先答后看 |
| 10–45 min | 核心概念 | 心智模型、Vue 对照、官方文档、面试追问 |
| 45–100 min | 动手实践 | 你写代码，我出题/提示/review，不直接给完整答案 |
| 100–110 min | 闭卷自测 | 3–5 题，暴露理解漏洞 |
| 110–120 min | 总结与记录 | 复习卡、疑问、更新 `progress.md` |

时间不足时使用 `CLAUDE.md` 中的压缩版规则。**宁可按 1 小时拆成两天，也不要跳过动手环节。**

---

## 六、课程表

### 阶段 0 · 起跑（第 1 周，001–006）

**目标**：建立正确的 React 心智模型、可用的工程环境和可持续的学习系统。

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 001 | 诊断与环境搭建 | 闭卷诊断；Node/pnpm/Vite/React DevTools；笔记与目录规范 | 诊断结果 + 可运行的空项目 |
| 002 | Vue→React 心智模型 I | 声明式 UI、render/commit、状态快照、不可变更新；Vue 响应式 vs React 重渲染 | 把一个 Vue 计数器/Todo 改写为 React |
| 003 | Vue→React 心智模型 II | props/emit/slots/provide-inject/生命周期/指令/样式 的对应关系 | 完成对照表 + 双实现对比笔记 |
| 004 | React 19.3 全景 | 新 Hooks、Actions、RSC、Compiler、并发特性；生态地图与选型 | 画出个人 React 知识地图 |
| 005 | 工程基线 | Vite + TS 配置、ESLint/Prettier、路径别名、目录结构、调试 | 个人工程模板 |
| 006 | 复盘与校准 | 诊断讲评、弱项排序、制定个人补充清单 | 弱项清单 + 计划校准 |

**验收**：能用自己的话解释“Vue 的响应式更新”和“React 的重新渲染”的根本差异；项目能跑起来；诊断结果已记录。

---

### 阶段 1 · React 核心（第 2–5 周，007–030）

**目标**：摆脱教程，独立、规范地用 Hooks 完成中等复杂度页面；建立组件设计与测试意识。

#### 第 2 周 · 组件与渲染

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 007 | JSX 深入与组件本质 | JSX 编译产物、表达式、Fragment、组件即函数、命名与文件组织 | 10 个小组件练习 |
| 008 | Props、children 与组合 | props 只读、children 的插槽思维、组合 vs 继承、TS props | 布局组件（Card/Modal 雏形） |
| 009 | 渲染与提交 | render 纯函数、commit、StrictMode 双调用、状态快照、批处理初识 | 用日志观察 render/commit |
| 010 | 条件、列表、key 与事件 | 条件渲染、map/key、index key 问题、合成事件、事件委托 | 可增删列表 + key 实验 |
| 011 | 项目 A：笔记卡片列表 | 搜索、标签筛选、空状态、样式、组件拆分 | 可运行的项目 A |
| 012 | 周复盘与自测 | 检索测验、错题整理、代码 review | 周笔记 + 复习卡 |

#### 第 3 周 · 状态与表单

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 013 | useState 深入 | 惰性初始化、更新函数、对象/数组不可变、常见 bug | 购物车状态练习 |
| 014 | 批处理与状态提升 | 自动批处理、flushSync、状态提升、单一数据源 | 表单联动练习 |
| 015 | 表单：受控与非受控 | 受控/非受控、多字段、校验、v-model 对照 | 注册表单 |
| 016 | useReducer 与状态机思维 | reducer 设计、action、dispatch、与 useState 的边界 | 用 reducer 重写任务状态 |
| 017 | Context | createContext/useContext、Provider、性能陷阱、Context + Reducer | 主题/语言/用户上下文 |
| 018 | 项目 B（上）：任务面板 | 增删改查、筛选、Context 状态设计 | 项目 B 骨架 |

#### 第 4 周 · Effect、Ref 与自定义 Hook

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 019 | useRef 与 DOM | DOM 引用、可变值、useImperativeHandle、React 19 ref-as-prop | 输入框聚焦/媒体控制 |
| 020 | useEffect 深入 I | 依赖、清理、闭包、竞态、AbortController | 请求竞态实验 |
| 021 | useEffect 深入 II | “你可能不需要 Effect”、派生状态、key 重置、useEffectEvent | 重构 3 个坏 Effect |
| 022 | 自定义 Hook | 规则、组合、返回值设计；useDebounce/useLocalStorage/useFetch；VueUse 对照 | 个人 Hook 库雏形 |
| 023 | Error Boundary、Suspense、lazy | 类组件边界、react-error-boundary、懒加载、加载态 | 路由级懒加载 + 错误页 |
| 024 | 项目 B（下）+ 周复盘 | 完成项目 B、代码 review、补漏 | 项目 B + review 记录 |

#### 第 5 周 · 组件模式、性能与测试

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 025 | 组件模式 | compound components、render props、HOC、headless、受控/非受控 API | Tabs/Select 组件 |
| 026 | 组件 API 与 TypeScript | 泛型组件、多态组件、判别联合 props、ComponentProps | 可复用组件类型设计 |
| 027 | 性能基础 | React.memo、useMemo/useCallback、children 优化、Profiler | 渲染次数对比实验 |
| 028 | 测试入门 | Vitest、React Testing Library、查询优先级、user-event、Hook 测试 | 给项目 A/B 写测试 |
| 029 | 项目 C | 搜索、防抖、请求取消、错误/加载态、Hook 测试 | 项目 C + 测试 |
| 030 | 阶段 1 复盘 | 闭卷测验、项目 review、补漏 | 阶段报告 + 复习卡 |

**阶段验收**

- 不查教程，独立完成一个带筛选、表单、异步请求和错误处理的页面
- 能解释 state 快照、批处理、Effect 依赖、闭包陷阱
- 能设计 2 个以上自定义 Hook，并说清复用边界
- 项目 A/B/C 均有测试，能跑通
- 闭卷测验 ≥ 80 分

---

### 阶段 2 · 并发渲染与 React 19 新范式（第 6–7 周，031–042）

**目标**：理解并发渲染的动机与代价；掌握 Transition、DeferredValue、Actions、乐观更新、Activity、Compiler。

#### 第 6 周 · 并发渲染

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 031 | 并发渲染心智模型 | 可中断渲染、优先级、双缓冲、时间切片；为什么需要 transition | 画并发渲染流程图 |
| 032 | useTransition / startTransition | 紧急 vs 非紧急更新、pending、Suspense 集成 | 搜索/切换 Tab 实验 |
| 033 | useDeferredValue | 延迟值、与 debounce/transition 的区别、配合 memo | 大列表过滤实验 |
| 034 | useSyncExternalStore | 外部 store 订阅、tearing、subscribe/getSnapshot | 手写迷你 store 并接入 |
| 035 | Effect 全家桶 | useEffect/useLayoutEffect/useInsertionEffect 的选择与并发下的副作用 | 布局测量实验 |
| 036 | 性能实验 | Profiler、渲染火焰图、transition/deferred 对比 | 性能对比报告 |

#### 第 7 周 · React 19 新范式

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 037 | Actions、useActionState、useFormStatus | 异步表单、pending、错误、渐进增强 | 异步表单 + pending/error |
| 038 | useOptimistic 乐观更新 | 乐观更新、回滚、与 transition 配合 | 评论/点赞乐观更新 |
| 039 | use() 与 Suspense 数据读取 | use(promise/context)、缓存要求、边界捕获 | Suspense 数据读取 demo |
| 040 | Activity 与 19.3 新 API | Activity、ViewTransition、addTransitionType、Fragment ref | 保留状态的 Tab/页面过渡 |
| 041 | React Compiler | 原理、自动 memo、规则、迁移、与手写 memo 的关系 | 开启 compiler 前后对比 |
| 042 | 项目 D + 阶段复盘 | 评论流：Actions + 乐观更新 + Suspense + 错误恢复 | 项目 D + 阶段测验 |

**阶段验收**

- 能解释“可中断渲染”与优先级解决了什么问题
- 能判断一个交互该用普通 setState、transition 还是 deferred value
- 能独立实现乐观更新并处理回滚
- 能说清 React Compiler 改变/没有改变什么
- 项目 D 可运行，阶段测验 ≥ 80 分

---

### 阶段 3 · 生态与工程化（第 8–11 周，043–066）

**目标**：建立“状态/数据/路由/表单/样式/测试/部署”的完整工程能力，能做出有依据的选型。

#### 第 8 周 · 状态管理

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 043 | 状态分类与选型 | 本地/共享/服务端/URL/表单状态；决策树；避免全局状态滥用 | 选型决策图 |
| 044 | Zustand 深入 | store、selector、不可变更新、中间件、持久化 | 购物车/主题 store |
| 045 | Redux Toolkit | slice、configureStore、thunk、RTK Query 概览 | 任务应用迁移 RTK |
| 046 | Jotai 与原子化 | 原子化状态、细粒度订阅、XState 状态机概览 | 原子化 demo |
| 047 | 状态重构实战 | 把项目 B 重构为 Zustand/RTK，对比可维护性与性能 | 重构 PR + 对比笔记 |
| 048 | 周复盘 | 状态管理选型报告、面试追问 | 选型报告 |

#### 第 9 周 · 服务端状态与数据层

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 049 | TanStack Query I | QueryClient、useQuery、缓存生命周期、staleTime/gcTime、缓存键 | 列表查询 |
| 050 | TanStack Query II | mutation、invalidate、乐观更新、分页/无限滚动 | 增删改 + 无限滚动 |
| 051 | TanStack Query III | 依赖查询、预取、SSR 集成、SWR 对比 | 预取与缓存实验 |
| 052 | 数据层架构 | API client、DTO→领域模型、错误规范、取消、鉴权 | 数据层设计文档 |
| 053 | 实时数据 | WebSocket/SSE、缓存同步、重连、轮询策略 | 实时列表 demo |
| 054 | 项目 E | Dashboard 数据层：缓存、分页、乐观更新 | 项目 E + 周复盘 |

#### 第 10 周 · 路由、表单与样式

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 055 | React Router v7 | 嵌套路由、loader/action、错误边界、懒加载 | 多页应用路由 |
| 056 | TanStack Router | 类型安全路由、search params、代码分割、选型 | 路由对比 demo |
| 057 | 表单工程 | react-hook-form、zod、复杂表单、性能 | 多步表单 |
| 058 | 样式方案 | CSS Modules、Tailwind、CSS-in-JS 现状、vanilla-extract、主题 | 主题化组件 |
| 059 | 设计系统 | shadcn/ui、Radix、cva、无障碍、组件文档 | 3 个业务组件 |
| 060 | 项目 F 启动 | Admin：布局、路由、表格、表单 | 项目 F 骨架 |

#### 第 11 周 · 测试、TypeScript 与工程化

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 061 | RTL 深入与 MSW | 测试异步、网络 mock、集成测试策略 | 页面级测试 |
| 062 | Playwright 与 a11y | E2E、关键路径、axe 可访问性、CI | E2E 用例 |
| 063 | TypeScript 工程化 | 泛型组件、判别联合、satisfies、类型测试、ESLint | 类型规范文档 |
| 064 | 构建与部署 | Vite 配置、分包、bundle 分析、Web Vitals、性能预算 | 构建报告 |
| 065 | 可观测性 | Error Boundary 上报、Sentry、日志、Source Map | 监控接入 |
| 066 | 项目 F 完成 | 测试、CI、部署、阶段复盘 | 可上线项目 + 阶段报告 |

**阶段验收**

- 能根据场景画出状态选型决策树，并解释 Zustand/Redux/TanStack Query 的边界
- Admin 应用具备路由、表单、表格、请求缓存、测试、CI、部署
- 能写类型安全的组件 API，掌握常见 TS 技巧
- 能读懂构建报告并提出优化方案
- 阶段测验 ≥ 80 分

---

### 阶段 4 · Next.js 与 RSC（第 12–13 周，067–078）

**目标**：掌握 App Router 时代的全栈 React 开发，理解 RSC 与 SSR 的本质差异和适用边界。

#### 第 12 周 · Next.js App Router

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 067 | Next.js 16 概览 | 文件路由、layouts、Server/Client Components 边界 | 迁移一个页面 |
| 068 | 数据获取与缓存 | fetch 缓存、`use cache`、revalidate、streaming、loading/error | 缓存实验 |
| 069 | Server Actions | 表单、useActionState、安全边界、渐进增强 | CRUD 表单 |
| 070 | 渲染策略 | SSG/SSR/ISR/PPR/Edge、图片/字体优化 | 策略对比表 |
| 071 | 认证与授权 | session、middleware、路由保护、权限模型 | 登录 + 受保护页 |
| 072 | 项目 G（上） | 全栈笔记：RSC、Server Actions、缓存、鉴权 | 项目 G 骨架 |

#### 第 13 周 · RSC 深入与框架选型

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 073 | RSC 原理 | Flight 协议、序列化、client/server 边界、bundler 集成 | 画 RSC 数据流 |
| 074 | RSC 心智模型 | 能力限制、状态放哪、请求瀑布、缓存、第三方库兼容 | 反模式清单 |
| 075 | SSR 与水合 | hydration mismatch、流式渲染、选择性水合 | 修复 hydration 错误 |
| 076 | 框架对比与选型 | Next.js vs React Router v7 vs TanStack Start vs Vite SPA | 选型报告 |
| 077 | 项目 G（下） | 完成、部署、性能审计 | 全栈应用上线 |
| 078 | 阶段复盘 | RSC 测验、项目 review、迁移对比报告 | 阶段报告 |

**阶段验收**

- 能说清 RSC 与 SSR 的区别，以及 “use client” 边界如何划分
- 能独立完成带鉴权、Server Actions、缓存策略的 Next.js 应用
- 能解释 hydration mismatch 的常见原因并修复
- 能针对团队场景给出框架选型建议
- 阶段测验 ≥ 80 分

---

### 阶段 5 · 底层原理（第 14–16 周，079–096）

**目标**：从“会用”走到“能解释、能读源码、能手写核心机制”；覆盖面试原理追问。

#### 第 14 周 · 手写 mini-React

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 079 | 原理总览与调试环境 | JSX→Element→Fiber→Commit 全链路；React 源码结构、本地调试 | 源码调试环境 |
| 080 | 手写 createElement / render | 虚拟 DOM、递归渲染、更新与删除 | mini-react v1 |
| 081 | 手写 Fiber 与 workLoop | 可中断渲染、requestIdleCallback、工作单元 | mini-react v2 |
| 082 | Reconciliation 与 commit | diff、key、移动、DOM 提交 | mini-react v3 |
| 083 | 手写 Hooks | hook 链表、useState、useEffect、更新队列 | mini-react v4 |
| 084 | mini-React 完善 | 测试、边界情况、周复盘 | mini-react + 笔记 |

#### 第 15 周 · Fiber、Commit 与调度

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 085 | Fiber 数据结构 | tag、flags、lanes、alternate、child/sibling/return、双缓冲 | Fiber 结构图 |
| 086 | Render 阶段源码 | beginWork/completeWork、bailout、reconcileChildren | 源码笔记 |
| 087 | Commit 阶段源码 | beforeMutation/mutation/layout/passive、ref 挂载 | 断点实验 |
| 088 | Scheduler | 优先级、时间切片、MessageChannel、饥饿问题 | 调度实验 |
| 089 | Lane 模型 | 位运算、优先级合并、批处理、同步/并发入口 | Lane 图 |
| 090 | 源码阅读实验 | 断点观察 render/commit、Performance 面板 | 调试报告 |

#### 第 16 周 · Hooks、Suspense 与 React 19 源码

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 091 | Hooks 源码 | dispatcher、mount/update、updateQueue、eagerState、bailout | Hooks 源码笔记 |
| 092 | Effect 源码 | 环形链表、依赖比较、清理时机、useSyncExternalStore | Effect 时序图 |
| 093 | Context 与 Suspense 源码 | 栈传播、Offscreen、throw promise、ping | 源码笔记 |
| 094 | React 19 新特性源码 | Actions、useOptimistic、useActionState、use() | 特性实现笔记 |
| 095 | Compiler 与 RSC 原理 | Babel 插件、memo cache、Flight、hydration | 对比文章提纲 |
| 096 | 阶段复盘 | 原理闭卷测验、手写题、补漏 | 阶段报告 |

**阶段验收**

- 能独立讲清一次 setState 到 DOM 更新的完整链路
- 能解释 Fiber 双缓冲、可中断渲染、Lane 优先级、时间切片
- 能解释 Hooks 为什么不能条件调用、useEffect 的执行时机
- 能解释 Suspense 的 throw promise / ping 机制
- mini-React 可运行，源码笔记完整，闭卷测验 ≥ 80 分

---

### 阶段 6 · 综合项目与输出（第 17–18 周，097–108）

**目标**：把 16 周能力整合成一个可展示的项目，并完成迁移、面试与输出。

#### 第 17 周 · Capstone

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 097 | Capstone 立项 | 需求、架构、技术选型、里程碑、验收标准 | 设计文档 |
| 098 | 数据层与鉴权 | API/数据层、登录、权限、项目骨架 | 可登录骨架 |
| 099 | 核心功能 | 页面、表单、状态、错误处理 | 核心流程 |
| 100 | 实时与性能 | 乐观更新、实时同步、性能优化 | 性能报告 |
| 101 | 质量保障 | 测试、可访问性、错误监控、CI | 测试与监控 |
| 102 | 上线与 review | 部署、性能审计、代码 review | 线上应用 |

#### 第 18 周 · 输出与固化

| 课时 | 主题 | 核心内容 | 动手 / 产出 |
|---|---|---|---|
| 103 | 代码 review 与重构 | 架构复盘、坏味道、重构清单 | 重构记录 |
| 104 | Vue→React 迁移与团队落地 | 迁移策略、规范、培训、常见坑 | 迁移方案 |
| 105 | 面试专题 | 高频题、原理追问、手写题、项目讲述 | 面试题库 |
| 106 | 二轮复习 | 知识图谱、错题、薄弱点 | 复习计划 |
| 107 | 技术输出 | 深度文章或团队分享 | 文章/PPT |
| 108 | 结业复盘 | 能力评估、后续进阶路线 | 结业报告 |

**最终验收**

- Capstone 已部署，具备测试、错误监控、基本性能优化
- 能完成一场 45 分钟的 React 模拟面试（使用 + 生态 + 原理）
- 有一篇可发布的深度文章或一次团队分享
- 形成个人 React 知识图谱与后续学习路线

---

## 七、阶段验收与考核

| 阶段 | 形式 | 通过标准 |
|---|---|---|
| 0 | 口头解释 + 环境检查 | 能讲清两种更新模型；项目可运行 |
| 1 | 闭卷测验 + 项目 review | ≥ 80 分；项目 A/B/C 达标 |
| 2 | 性能报告 + 项目 D | 能正确选型并发 API；项目可运行 |
| 3 | 项目 F + 选型报告 | 可上线；测试/CI/部署齐全 |
| 4 | 项目 G + 选型报告 | RSC/SSR 解释正确；应用上线 |
| 5 | 闭卷测验 + mini-React | ≥ 80 分；源码笔记完整 |
| 6 | Capstone + 模拟面试 | 项目上线；面试表达清晰 |

未通过的处理：标记薄弱点，安排 1–2 个补强课时，再重测；不直接进入下一阶段。

## 八、复习与考核机制

1. **每日检索**：每次学习前 10 分钟，先回忆再核对。
2. **间隔复习**：每个课时结束后记录 3 个问题，按 1/3/7/15 天进入复习队列。
3. **周复盘**：每周第 6 天做 20 分钟闭卷测验 + 错题整理 + 项目 review。
4. **阶段测验**：每阶段结束做 45 分钟闭卷测验，覆盖使用、生态、原理。
5. **错题本**：`notes/mistakes.md` 记录错误、原因、正确理解、重测日期。
6. **费曼输出**：每个阶段至少用自己的话写一篇总结或做一次口头讲解。

## 九、弹性调整规则

- **每天只有 1 小时**：把一个课时拆成两天，保持“概念 + 动手”闭环；总周期顺延。
- **每天 3 小时以上**：可合并相邻的概念课时，但不要跳过项目与测验。
- **工作打断**：进度原地保留；恢复时先用 20 分钟复习再继续。
- **某主题薄弱**：标记 🔁，从机动日或复盘日借 1–2 个课时补强。
- **某主题已掌握**：通过闭卷测验后可跳过对应练习，但阶段项目不能跳。
- **每 4 周校准一次**：检查进度、弱项、目标变化，必要时调整后续计划并记录原因。

## 十、学习产出清单

- 108 份每日学习单（`daily/`）
- 持续更新的 Vue→React 对照手册（`notes/vue-to-react-mapping.md`）
- 错题本与薄弱点清单（`notes/mistakes.md`）
- 7 个项目：A 笔记卡片、B 任务面板、C 搜索列表、D 评论流、E Dashboard、F Admin、G 全栈笔记
- 1 个 Capstone 线上项目
- 6 份阶段报告 + 6 次闭卷测验
- 1 套面试题库 + 1 篇文章/分享

## 十一、版本与资料来源

- React 19.3（2026-09 发布，19.3.1 补丁 2026-10）
- Next.js 16.x（App Router、Turbopack、PPR、`use cache`）
- 具体 API 以 [react.dev](https://react.dev) 与 [nextjs.org](https://nextjs.org) 最新文档为准
- 精选资源见 `resources.md`

> 计划不是合同。坚持“理解优先、动手优先、诚实记录”，比严格按日期打卡更重要。
