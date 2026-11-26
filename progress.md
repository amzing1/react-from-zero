# React 学习进度

> 本文件是**唯一进度源**。每次学习结束后由 Claude 更新；未确认完成的内容不勾选。
>
> 标记说明：`[ ]` 未完成 · `[x]` 已完成 · 🔁 需复习 · ⏸ 暂停/跳过

## 当前状态

- **当前阶段**：阶段 1 · React 核心
- **下一个课时**：018 · 项目 B（上）：任务管理面板
- **进行中**：无
- **已完成**：17 / 108
- **连续学习**：4 天（11-22 至 11-25；11-21 中断）
- **开始日期**：2026-11-15
- **最近更新**：2026-11-25
- **计划周期**：18 周（每天约 2 小时，每周 6 天）

## 阶段进度

| 阶段 | 课时范围 | 完成 |
|---|---|---|
| 0 · 起跑 | 001–006 | 6 / 6 ✅ |
| 1 · React 核心 | 007–030 | 11 / 24 |
| 2 · 并发与新范式 | 031–042 | 0 / 12 |
| 3 · 生态与工程化 | 043–066 | 0 / 24 |
| 4 · Next.js 与 RSC | 067–078 | 0 / 12 |
| 5 · 底层原理 | 079–096 | 0 / 18 |
| 6 · 综合与输出 | 097–108 | 0 / 12 |

---

## 课时清单

### 阶段 0 · 起跑（第 1 周）

- [x] 001 · 诊断与环境搭建
- [x] 002 · Vue→React 心智模型 I：渲染与状态
- [x] 003 · Vue→React 心智模型 II：组件、组合与生命周期
- [x] 004 · React 19.3 全景与生态地图
- [x] 005 · 工程基线：Vite + TS + ESLint + DevTools
- [x] 006 · 阶段复盘与学习系统校准（2026-11-20 完成；闭卷自测 3.6/5）

### 阶段 1 · React 核心（第 2–5 周）

**第 2 周 · 组件与渲染**

- [x] 007 · JSX 深入与组件本质（2026-11-22 完成；自测 4.4/6）
- [x] 008 · Props、children 与组合（2026-11-22 完成；自测 3.6/5）
- [x] 009 · 渲染与提交：纯函数、StrictMode、快照（2026-11-22 完成；自测 4.5/6）
- [x] 010 · 条件渲染、列表、key 与事件（2026-11-22 完成；自测 4.5/5）
- [x] 011 · 项目 A：笔记卡片列表（2026-11-22 完成；项目自测 5.1/6）
- [x] 012 · 周复盘与自测（2026-11-23 完成；到期复习 2.7/3，周测验 4.9/6）

**第 3 周 · 状态与表单**

- [x] 013 · useState 深入与不可变更新（2026-11-24 完成；自测 3.4/5，补测后通过）
- [x] 014 · 批处理、更新函数、状态提升（2026-11-24 完成；自测 3.9/5）
- [x] 015 · 表单：受控/非受控与 v-model 对比（2026-11-25 完成；自测 3.5/6，补测通过）
- [x] 016 · useReducer 与状态机思维（2026-11-25 完成；自测 2.8/5，补测 2.3/3 通过）
- [x] 017 · Context 与 provide/inject（2026-11-25 完成；自测 5.6/6）
- [ ] 018 · 项目 B（上）：任务管理面板

**第 4 周 · Effect、Ref 与自定义 Hook**

- [ ] 019 · useRef、DOM 与 useImperativeHandle
- [ ] 020 · useEffect 深入 I：依赖、清理、闭包、竞态
- [ ] 021 · useEffect 深入 II：你可能不需要 Effect、useEffectEvent
- [ ] 022 · 自定义 Hook 设计与 VueUse 对比
- [ ] 023 · Error Boundary、Suspense、lazy
- [ ] 024 · 项目 B（下）+ 周复盘

**第 5 周 · 组件模式、性能与测试**

- [ ] 025 · 组件模式：compound/render props/HOC/headless
- [ ] 026 · 组件 API 设计与 TS 泛型/多态组件
- [ ] 027 · 性能基础：memo/useMemo/useCallback/Profiler
- [ ] 028 · 测试入门：Vitest + RTL
- [ ] 029 · 项目 C：搜索、防抖、取消请求与测试
- [ ] 030 · 阶段 1 复盘、闭卷测验与项目 review

### 阶段 2 · 并发渲染与 React 19 新范式（第 6–7 周）

**第 6 周 · 并发渲染**

- [ ] 031 · 并发渲染心智模型
- [ ] 032 · useTransition / startTransition
- [ ] 033 · useDeferredValue
- [ ] 034 · useSyncExternalStore
- [ ] 035 · Effect 全家桶与并发下的副作用
- [ ] 036 · 实验：大列表与图表切换性能

**第 7 周 · React 19 新范式**

- [ ] 037 · Actions、useActionState、useFormStatus
- [ ] 038 · useOptimistic 乐观更新
- [ ] 039 · use() 与 Suspense 数据读取
- [ ] 040 · Activity、ViewTransition 与 19.3 新 API
- [ ] 041 · React Compiler：原理、规则与迁移
- [ ] 042 · 项目 D：评论流 + 阶段 2 复盘

### 阶段 3 · 生态与工程化（第 8–11 周）

**第 8 周 · 状态管理**

- [ ] 043 · 状态分类与选型决策树
- [ ] 044 · Zustand 深入
- [ ] 045 · Redux Toolkit 与 RTK Query 概览
- [ ] 046 · Jotai、原子化状态与 XState 概览
- [ ] 047 · 项目 B 状态重构实战
- [ ] 048 · 周复盘：状态管理选型报告

**第 9 周 · 服务端状态与数据层**

- [ ] 049 · TanStack Query I：缓存生命周期
- [ ] 050 · TanStack Query II：Mutation、乐观更新、无限滚动
- [ ] 051 · TanStack Query III：SSR、预取与 SWR 对比
- [ ] 052 · 数据层架构：API Client、DTO、错误与取消
- [ ] 053 · 实时数据：WebSocket/SSE 与缓存同步
- [ ] 054 · 项目 E：Dashboard 数据层 + 周复盘

**第 10 周 · 路由、表单与样式**

- [ ] 055 · React Router v7 数据路由
- [ ] 056 · TanStack Router 与类型安全路由
- [ ] 057 · react-hook-form + zod
- [ ] 058 · 样式方案：CSS Modules/Tailwind/CSS-in-JS
- [ ] 059 · 组件库与设计系统：shadcn/Radix/cva
- [ ] 060 · 项目 F：Admin 应用启动 + 周复盘

**第 11 周 · 测试、TypeScript 与工程化**

- [ ] 061 · RTL 深入与 MSW
- [ ] 062 · Playwright E2E 与可访问性测试
- [ ] 063 · TypeScript 工程化
- [ ] 064 · 构建、部署与性能预算
- [ ] 065 · 错误监控与可观测性
- [ ] 066 · 项目 F：测试、CI、部署 + 阶段 3 复盘

### 阶段 4 · Next.js 与 RSC（第 12–13 周）

**第 12 周 · Next.js App Router**

- [ ] 067 · Next.js 16 概览与 Server/Client 边界
- [ ] 068 · 数据获取、缓存与 Streaming
- [ ] 069 · Server Actions、表单与安全
- [ ] 070 · 渲染策略：SSG/SSR/ISR/PPR/Edge
- [ ] 071 · 认证授权与 Middleware
- [ ] 072 · 项目 G：全栈笔记应用（上）

**第 13 周 · RSC 深入与框架选型**

- [ ] 073 · RSC 原理：Flight、序列化与边界
- [ ] 074 · RSC 心智模型与限制
- [ ] 075 · SSR 与水合
- [ ] 076 · 框架对比与选型
- [ ] 077 · 项目 G：全栈笔记应用（下）+ 部署
- [ ] 078 · 阶段 4 复盘与迁移报告

### 阶段 5 · 底层原理（第 14–16 周）

**第 14 周 · 手写 mini-React**

- [ ] 079 · React 原理总览与源码调试环境
- [ ] 080 · 手写 createElement / render / 更新
- [ ] 081 · 手写 Fiber 与可中断 workLoop
- [ ] 082 · Reconciliation、diff 与 commit
- [ ] 083 · 手写 Hooks（useState/useEffect）
- [ ] 084 · mini-React 完善 + 周复盘

**第 15 周 · Fiber、Commit 与调度**

- [ ] 085 · Fiber 数据结构与双缓冲
- [ ] 086 · Render 阶段源码：beginWork/completeWork
- [ ] 087 · Commit 阶段源码
- [ ] 088 · Scheduler 与时间切片
- [ ] 089 · Lane 模型与批处理
- [ ] 090 · 源码阅读实验 + 周复盘

**第 16 周 · Hooks、Suspense 与 React 19 源码**

- [ ] 091 · Hooks 源码：dispatcher、链表、updateQueue、eagerState
- [ ] 092 · Effect 源码与 useSyncExternalStore
- [ ] 093 · Context 与 Suspense 源码
- [ ] 094 · React 19 Actions/useOptimistic/use() 源码概览
- [ ] 095 · React Compiler 与 RSC/Flight 原理
- [ ] 096 · 阶段 5 复盘与原理闭卷测验

### 阶段 6 · 综合与输出（第 17–18 周）

**第 17 周 · Capstone**

- [ ] 097 · Capstone 立项：需求、架构、选型
- [ ] 098 · 数据层、鉴权与核心骨架
- [ ] 099 · 核心页面、表单与状态
- [ ] 100 · 实时、乐观更新与性能
- [ ] 101 · 测试、可访问性与错误监控
- [ ] 102 · 部署、性能审计与 review

**第 18 周 · 输出与固化**

- [ ] 103 · 代码 review 与重构
- [ ] 104 · Vue→React 迁移策略与团队落地
- [ ] 105 · 面试专题：高频题、原理追问、手写题
- [ ] 106 · 知识体系梳理与二轮复习
- [ ] 107 · 技术输出：文章或分享
- [ ] 108 · 结业复盘与进阶路线

---

## 复习队列

> 规则：每个课时结束后记录 3 个问题，按 1/3/7/15 天安排复习；复习结果记入状态。

| 复习日期 | 来源课时 | 复习问题 | 状态 |
|---|---|---|---|
| 2026-11-16 | 001 诊断 | useEffect 的 cleanup 在何时执行？依赖如何比较？ | 已完成（11-16） |
| 2026-11-16 | 001 学习 | StrictMode 在开发/生产的行为？render 与 commit 的区别？ | 已完成（11-16，Q2 部分纠正） |
| 2026-11-17 | 002 | 1) 三次 setN(n+1) vs setN(x=>x+1) 结果？2) setState 后为何读到旧值？3) 两次 setState render 几次？ | 已完成（11-17，快照读取待补） |
| 2026-11-18 | 001 诊断 | React commit 有哪些子阶段？useLayoutEffect/useEffect 分别何时执行？ | 已完成（11-18，子阶段补全） |
| 2026-11-18 | 001 学习 | memo 的浅比较与 bailout 条件？element 创建与组件函数执行的区别？ | 已完成（11-18，element 概念纠正） |
| 2026-11-18 | 003 | 1) emit/三种插槽/provide-inject 的 React 写法？2) `onClick={onSave("x")}` 错在哪？3) children 与具名插槽？ | 已完成（11-18） |
| 2026-11-19 | 002 | 1) React 用什么判断 state 变化？2) 为什么必须不可变？3) setList([...list]) 的隐患？ | 已完成（11-20，延迟；mutation 隐患仍需巩固） |
| 2026-11-19 | 004 | 1) 19.0/19.2/19.3 主线+代表 API？2) Actions 三件套分工？3) Activity hidden 的 state/Effect 行为？ | 已完成（11-20，延迟；Actions/RSC 待巩固） |
| 2026-11-20 | 003 | 1) 内联 Context value 为何导致额外重渲染？2) 与 provide/inject 的追踪差异？3) 两种减少重渲染的方法？ | 已完成（11-20，value 引用已答对） |
| 2026-11-21 | 004 | 1) RSC 与 SSR 的区别？2) Server Component 的限制？3) Compiler 后何时仍需手写 memo？ | 已完成（11-23，RSC 水合部分掌握） |
| 2026-11-21 | 005 | 1) Vite dev/build 差异与 Rolldown/Oxc 分工？2) paths vs alias？3) strict 关键子项？ | 已完成（11-23，Vite 分工答对） |
| 2026-11-21 | 006 | 1) Vue 的「细粒度」在哪一层？React 为什么只能组件级重渲染？2) 跳过子组件重渲染的三种手段？useMemo 为什么不算？3) RSC 与 SSR 的区别？Server Component 会 hydrate 吗？ | 已完成（11-22，007 热身/自测覆盖） |
| 2026-11-22 | 001 诊断 | Context value 变化时哪些组件重渲染？如何减少？ | 待复习（延迟至 11-26） |
| 2026-11-22 | 001 学习 | createRoot 相比 ReactDOM.render 的变化？为什么函数式更新更安全？ | 待复习（延迟至 11-26） |
| 2026-11-23 | 002 | 1) 父组件更新子组件默认重渲染吗？Vue 呢？2) 三种跳过手段？3) Vue 为何仍需 diff？ | 待复习（延迟至 11-24） |
| 2026-11-23 | 005 | 1) verbatimModuleSyntax/erasableSyntaxOnly？2) noUncheckedIndexedAccess 取舍？3) sourcemap hidden 用法？ | 待复习（延迟至 11-24） |
| 2026-11-23 | 006 | 1) Vue 的「细粒度」在哪一层？React 为什么只能组件级重渲染？2) 跳过子组件重渲染的三种手段？useMemo 为什么不算？3) RSC 与 SSR 的区别？Server Component 会 hydrate 吗？ | 已完成（11-23，粒度/跳过手段/RSC 覆盖） |
| 2026-11-23 | 007 | 1) `<div>` 和 `<Foo>` 编译后第一个参数差在哪？为什么必须大写？2) Fragment 短语法能加 key 吗？`<Fragment key>` 呢？3) `0 && <X />` 渲染什么？为什么？ | 已完成（11-23，Q1 0.9） |
| 2026-11-23 | 008 | 1) Vue 的具名插槽、作用域插槽在 React 里怎么写？2) 为什么不能直接调用组件函数？3) children 作为 prop 为什么可能减少重渲染？ | 已完成（11-23，Q2 0.9） |
| 2026-11-23 | 009 | 1) render/commit 各做什么？commit 四个子阶段？哪个可中断？2) 为什么 render 必须纯？StrictMode 下 render/commit/Effect 各几次（开发/生产）？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 的结果？为什么？ | 已完成（11-23，Q3 1.0/Q4 0.5，更新函数需重测） |
| 2026-11-23 | 010 | 1) 为什么 index 作为 key 在重排时会出问题？给一个具体场景。2) key 每次 render 都变会怎样？key 能通过 props 拿到吗？3) React 事件监听器挂在哪里？target vs currentTarget？stopPropagation vs preventDefault？ | 已完成（11-23，Q5 0.7，index key 需重测） |
| 2026-11-23 | 011 | 1) 为什么过滤结果要 render 时派生，而不是放 state？2) 受控 vs 非受控：只写 onChange 不写 value 会怎样？清除筛选时为什么必须受控？3) 列表 key 用什么？index 在过滤/重排时为什么出问题？ | 已完成（11-23，Q6 0.9） |
| 2026-11-24 | 003 | 1) 条件挂载 vs 提前 return 的生命周期差异？2) 为何 Hooks 不能条件调用？3) StrictMode 下 Modal 日志？ | 部分掌握（11-24，Hooks 对，生命周期差异需重测） |
| 2026-11-24 | 009 重测 | 三次 `setN(x=>x+1)` 从 0 开始的结果？更新队列怎么执行？初始 0 算不算一次更新？ | 已完成（11-24，补测正确） |
| 2026-11-24 | 010 重测 | index key 重排时 React 复用的是什么？为什么不是「跳过 DOM 更新」？ | 已完成（11-24，Q7 正确） |
| 2026-11-24 | 004 重测 | RSC 树里谁会被 hydrate？Server Component 和 Client Component 分别怎样？ | 已完成（11-24，Q8 正确） |
| 2026-11-25 | 004 | 1) 三层模型与使用顺序？2) 生态选型：状态/服务端状态/路由？3) 19.3 新能力（ViewTransition/Fragment refs/browser）？ | 未完成，顺延（后续热身分批） |
| 2026-11-25 | 007 | 1) `<div>` 和 `<Foo>` 编译后第一个参数差在哪？为什么必须大写？2) Fragment 短语法能加 key 吗？`<Fragment key>` 呢？3) `0 && <X />` 渲染什么？为什么？ | 未完成，顺延（后续热身分批） |
| 2026-11-25 | 008 | 1) Vue 的具名插槽、作用域插槽在 React 里怎么写？2) 为什么不能直接调用组件函数？3) children 作为 prop 为什么可能减少重渲染？ | 未完成，顺延（后续热身分批） |
| 2026-11-25 | 009 | 1) render/commit 各做什么？commit 四个子阶段？哪个可中断？2) 为什么 render 必须纯？StrictMode 下 render/commit/Effect 各几次（开发/生产）？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 的结果？为什么？ | 未完成，顺延（后续热身分批） |
| 2026-11-25 | 010 | 1) 为什么 index 作为 key 在重排时会出问题？给一个具体场景。2) key 每次 render 都变会怎样？key 能通过 props 拿到吗？3) React 事件监听器挂在哪里？target vs currentTarget？stopPropagation vs preventDefault？ | 未完成，顺延（后续热身分批） |
| 2026-11-25 | 011 | 1) 为什么过滤结果要 render 时派生，而不是放 state？2) 受控 vs 非受控：只写 onChange 不写 value 会怎样？清除筛选时为什么必须受控？3) 列表 key 用什么？index 在过滤/重排时为什么出问题？ | 未完成，顺延（后续热身分批） |
| 2026-11-25 | 003 重测 | 条件挂载 vs 提前 return 的生命周期差异？ | 待复习（延迟至 11-26） |
| 2026-11-25 | 013 | 1) `useState(expensive())` vs `useState(() => expensive())` 执行次数？StrictMode 差异？2) 为什么直接改 state 不触发更新？Object.is 起什么作用？嵌套对象怎么写不可变更新？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 从 0 开始的结果？写出队列过程。 | 待复习（延迟至 11-26） |
| 2026-11-25 | 014 | 1) 自动批处理覆盖哪些场景？React 17 vs 18+ 的区别？2) flushSync 做什么？两次独立调用 render 几次？代价是什么？3) 两个兄弟组件共享状态时 state 放哪？提升太高有什么问题？ | 待复习（延迟至 11-26） |
| 2026-11-26 | 015 | 1) 受控 vs 非受控的区别？文件输入为什么必须非受控？2) 多字段 state 怎么组织？checkbox/radio/select/textarea 各注意什么？3) `v-model` 对应什么？`.trim`/`.number`/`.lazy` 怎么实现？错误对象为什么不进 state？ | 待复习 |
| 2026-11-26 | 016 | 1) useState vs useReducer 怎么选？reducer 适合哪几类场景？2) reducer 为什么必须纯？StrictMode 双调用会暴露什么？连续两次 dispatch，render 几次、reducer 执行几次？3) 判别联合怎么消灭不可能状态？`never` 负责什么？非法转移在哪一层处理？ | 待复习 |
| 2026-11-26 | 017 | 1) Context value 变化时哪些组件重渲染？内联 value 的问题？三种优化？2) React.memo 能阻止 context 更新吗？为什么？3) Context + useReducer 为什么拆 state/dispatch？Vue provide/inject 与 React Context 的差异？ | 待复习 |
| 2026-11-27 | 005 | 1) 环境变量加载 + strictImportMetaEnv？2) 五层基线/初始化 checklist？3) Profiler 如何定位重渲染？ | 待复习 |
| 2026-11-27 | 006 | 1) Vue 的「细粒度」在哪一层？React 为什么只能组件级重渲染？2) 跳过子组件重渲染的三种手段？useMemo 为什么不算？3) RSC 与 SSR 的区别？Server Component 会 hydrate 吗？ | 待复习 |
| 2026-11-27 | 013 | 1) `useState(expensive())` vs `useState(() => expensive())` 执行次数？StrictMode 差异？2) 为什么直接改 state 不触发更新？Object.is 起什么作用？嵌套对象怎么写不可变更新？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 从 0 开始的结果？写出队列过程。 | 待复习 |
| 2026-11-27 | 014 | 1) 自动批处理覆盖哪些场景？React 17 vs 18+ 的区别？2) flushSync 做什么？两次独立调用 render 几次？代价是什么？3) 两个兄弟组件共享状态时 state 放哪？提升太高有什么问题？ | 待复习 |
| 2026-11-28 | 015 | 1) 受控 vs 非受控的区别？文件输入为什么必须非受控？2) 多字段 state 怎么组织？checkbox/radio/select/textarea 各注意什么？3) `v-model` 对应什么？`.trim`/`.number`/`.lazy` 怎么实现？错误对象为什么不进 state？ | 待复习 |
| 2026-11-28 | 016 | 1) useState vs useReducer？什么时候该用 reducer？2) reducer 为什么必须纯？StrictMode 如何检查？3) 状态机思维：判别联合怎么消灭不可能状态？ | 待复习 |
| 2026-11-28 | 017 | 1) Context value 变化时哪些组件重渲染？内联 value 的问题？三种优化？2) React.memo 能阻止 context 更新吗？为什么？3) Context + useReducer 为什么拆 state/dispatch？Vue provide/inject 与 React Context 的差异？ | 待复习 |
| 2026-11-29 | 007 | 1) `<div>` 和 `<Foo>` 编译后第一个参数差在哪？为什么必须大写？2) Fragment 短语法能加 key 吗？`<Fragment key>` 呢？3) `0 && <X />` 渲染什么？为什么？ | 待复习 |
| 2026-11-29 | 008 | 1) Vue 的具名插槽、作用域插槽在 React 里怎么写？2) 为什么不能直接调用组件函数？3) children 作为 prop 为什么可能减少重渲染？ | 待复习 |
| 2026-11-29 | 009 | 1) render/commit 各做什么？commit 四个子阶段？哪个可中断？2) 为什么 render 必须纯？StrictMode 下 render/commit/Effect 各几次（开发/生产）？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 的结果？为什么？ | 待复习 |
| 2026-11-29 | 010 | 1) 为什么 index 作为 key 在重排时会出问题？给一个具体场景。2) key 每次 render 都变会怎样？key 能通过 props 拿到吗？3) React 事件监听器挂在哪里？target vs currentTarget？stopPropagation vs preventDefault？ | 待复习 |
| 2026-11-29 | 011 | 1) 为什么过滤结果要 render 时派生，而不是放 state？2) 受控 vs 非受控：只写 onChange 不写 value 会怎样？清除筛选时为什么必须受控？3) 列表 key 用什么？index 在过滤/重排时为什么出问题？ | 待复习 |
| 2026-12-01 | 002 | 1) render/commit 各做什么？2) render 为何必须纯？3) StrictMode 双调用范围与 Effect 处理？ | 待复习 |
| 2026-12-01 | 013 | 1) `useState(expensive())` vs `useState(() => expensive())` 执行次数？StrictMode 差异？2) 为什么直接改 state 不触发更新？Object.is 起什么作用？嵌套对象怎么写不可变更新？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 从 0 开始的结果？写出队列过程。 | 待复习 |
| 2026-12-01 | 014 | 1) 自动批处理覆盖哪些场景？React 17 vs 18+ 的区别？2) flushSync 做什么？两次独立调用 render 几次？代价是什么？3) 两个兄弟组件共享状态时 state 放哪？提升太高有什么问题？ | 待复习 |
| 2026-12-02 | 003 | 1) Vue 生命周期/指令/样式映射？2) 作用域插槽怎么实现？3) React 19 Context/ref-as-prop 新写法？ | 待复习 |
| 2026-12-02 | 015 | 1) 受控 vs 非受控的区别？文件输入为什么必须非受控？2) 多字段 state 怎么组织？checkbox/radio/select/textarea 各注意什么？3) `v-model` 对应什么？`.trim`/`.number`/`.lazy` 怎么实现？错误对象为什么不进 state？ | 待复习 |
| 2026-12-02 | 016 | 1) useState vs useReducer？什么时候该用 reducer？2) reducer 为什么必须纯？StrictMode 如何检查？3) 状态机思维：判别联合怎么消灭不可能状态？ | 待复习 |
| 2026-12-02 | 017 | 1) Context value 变化时哪些组件重渲染？内联 value 的问题？三种优化？2) React.memo 能阻止 context 更新吗？为什么？3) Context + useReducer 为什么拆 state/dispatch？Vue provide/inject 与 React Context 的差异？ | 待复习 |
| 2026-12-03 | 004 | 1) 19.0–19.3 各解决什么问题？2) Actions 与普通事件处理的区别？3) use() 的 Promise 缓存要求？ | 待复习 |
| 2026-12-05 | 005 | 1) 四条脚本的职责？2) project references / tsc -b？3) oxlint/ESLint/Biome 选型？ | 待复习 |
| 2026-12-05 | 006 | 1) Vue 的「细粒度」在哪一层？React 为什么只能组件级重渲染？2) 跳过子组件重渲染的三种手段？useMemo 为什么不算？3) RSC 与 SSR 的区别？Server Component 会 hydrate 吗？ | 待复习 |
| 2026-12-07 | 007 | 1) `<div>` 和 `<Foo>` 编译后第一个参数差在哪？为什么必须大写？2) Fragment 短语法能加 key 吗？`<Fragment key>` 呢？3) `0 && <X />` 渲染什么？为什么？ | 待复习 |
| 2026-12-07 | 008 | 1) Vue 的具名插槽、作用域插槽在 React 里怎么写？2) 为什么不能直接调用组件函数？3) children 作为 prop 为什么可能减少重渲染？ | 待复习 |
| 2026-12-07 | 009 | 1) render/commit 各做什么？commit 四个子阶段？哪个可中断？2) 为什么 render 必须纯？StrictMode 下 render/commit/Effect 各几次（开发/生产）？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 的结果？为什么？ | 待复习 |
| 2026-12-07 | 010 | 1) 为什么 index 作为 key 在重排时会出问题？给一个具体场景。2) key 每次 render 都变会怎样？key 能通过 props 拿到吗？3) React 事件监听器挂在哪里？target vs currentTarget？stopPropagation vs preventDefault？ | 待复习 |
| 2026-12-07 | 011 | 1) 为什么过滤结果要 render 时派生，而不是放 state？2) 受控 vs 非受控：只写 onChange 不写 value 会怎样？清除筛选时为什么必须受控？3) 列表 key 用什么？index 在过滤/重排时为什么出问题？ | 待复习 |
| 2026-12-09 | 013 | 1) `useState(expensive())` vs `useState(() => expensive())` 执行次数？StrictMode 差异？2) 为什么直接改 state 不触发更新？Object.is 起什么作用？嵌套对象怎么写不可变更新？3) 三次 `setN(n+1)` vs 三次 `setN(x=>x+1)` 从 0 开始的结果？写出队列过程。 | 待复习 |
| 2026-12-09 | 014 | 1) 自动批处理覆盖哪些场景？React 17 vs 18+ 的区别？2) flushSync 做什么？两次独立调用 render 几次？代价是什么？3) 两个兄弟组件共享状态时 state 放哪？提升太高有什么问题？ | 待复习 |
| 2026-12-10 | 015 | 1) 受控 vs 非受控的区别？文件输入为什么必须非受控？2) 多字段 state 怎么组织？checkbox/radio/select/textarea 各注意什么？3) `v-model` 对应什么？`.trim`/`.number`/`.lazy` 怎么实现？错误对象为什么不进 state？ | 待复习 |
| 2026-12-10 | 016 | 1) useState vs useReducer？什么时候该用 reducer？2) reducer 为什么必须纯？StrictMode 如何检查？3) 状态机思维：判别联合怎么消灭不可能状态？ | 待复习 |
| 2026-12-10 | 017 | 1) Context value 变化时哪些组件重渲染？内联 value 的问题？三种优化？2) React.memo 能阻止 context 更新吗？为什么？3) Context + useReducer 为什么拆 state/dispatch？Vue provide/inject 与 React Context 的差异？ | 待复习 |

## 待解决疑问

| 日期 | 问题 | 结论/状态 |
|---|---|---|
| 2026-11-20 | 006 知识地图缺 001 节点句；阶段 0 验收表述待最终确认；闭卷自测未做 | 已解决（11-20）：001 代填；验收表述通过；自测 3.6/5 已讲评 |
| 2026-11-25 | 复习队列积压：11-25 到期的 004/007-011 未做 | 顺延；11-26 优先 015/013/014，其余分批进热身 |

## 薄弱点与补强

| 主题 | 表现 | 补强安排 | 状态 |
|---|---|---|---|
| 现代 React（并发/Actions/RSC） | Actions/useOptimistic/use/RSC 仅知道名词；Activity 跑过 demo | 阶段 2/4 正常推进 + 每日热身 | 待补 |
| 底层原理（Commit/Scheduler/Suspense） | Commit 子阶段混淆；Scheduler/Suspense 不清楚 | 阶段 5；Day 023/039 预热 | 待补 |
| 生态（Query/路由/表单/测试） | 知道名字，不清楚边界与选型 | 阶段 3 | 待补 |
| useEffect 依赖与清理 | 会用，但 cleanup 时机和依赖比较不完整 | Day 020–021 + 复习队列 | 待补 |
| Context 重渲染 | 误以为只订阅需要的字段即可；内联 value 对象导致所有消费者额外重渲染 | Day 017 + 复习队列 | 已纠正（11-20），Day 017 巩固 |
| 工程化与 TS 严格项 | Vite 8 工具分工：预构建归属漏答（应归 Rolldown）；`strict` 8 项只答出 3 项 | Day 005 已讲；11-23 复习 | 待补 |
| 状态快照与不可变更新 | 012 Q4 快照读旧值解释正确；013 Q2 补测已说出 Object.is | Day 013–014 | 已掌握（11-24） |
| Vue/React 更新粒度 | 复述时两次说成「Vue 更新细粒度是组件级」；未说清 React 缺依赖追踪 | 007 热身 + 11-23 复习 | 已掌握（11-23，到期复习 Q3 正确） |
| RSC 水合 | 多次说成「RSC 无水合」；013 Q8 已答出 Client hydrate / Server 不 hydrate | 阶段 4 | 已掌握（11-24） |
| 嵌套不可变更新 | Day 013 Q3 展开缺属性名，语法不合法；补测正确 | Day 013 已讲；11-25 复习 | 已纠正（11-24） |
| 条件挂载 vs 提前 return | Day 013 Q6 只答了 Hooks 原因，没答生命周期差异 | Day 003 + 11-25 重测 | 部分掌握（11-24） |
| useMemo vs memo | 自测 Q2 把 useMemo 当作跳过子组件重渲染的手段 | Day 027 + 11-23 复习 | 待补 |
| JSX 编译与组件大小写 | 自测 Q2 没答出「字符串 tag vs 变量引用」 | Day 007 已讲；11-23 复习 | 已掌握（11-23，Q1 正确） |
| Fragment 短语法 key | 自测 Q4 说短语法能加 key | Day 007 已讲；11-23 复习 | 已复述（11-22） |
| 受控组件 | 011 Q6 曾把非受控重置时点说错；015 自测 Q2/Q3 细节不全，补测通过 | Day 017 + 复习 | 已巩固（11-25），细节待复测 |
| 文件输入 | 015 Q4 忘记原因；补测已答出 value 只读/安全限制 | Day 019 + 复习 | 已复述（11-25） |
| v-model 修饰符 | 015 Q5 `.lazy` 未答；补测 onBlur | Day 015 已讲；11-26 复习 | 已复述（11-25） |
| Vue provide/inject vs Context | 017 Q6 简化成「Vue 提供响应式数据」；实际取决于是否 ref/reactive | 11-26 复习 + Day 017 | 部分掌握（11-25） |
| useMemo 滥用 | 项目 A 对 8 条数据的过滤用 useMemo；selectedTags 每次新数组导致依赖必变 | Day 027 + 11-23 复习 | 已修正（11-22） |
| 可选 prop 哨兵 | Layout 用 `footer !== null`，修正时又写成 `\|\|` 恒真 | Day 008 + 015 | 已修正（11-22） |
| 直接调用组件函数 | 自测 Q3 只说跳过 reconcile，没答出 Hooks 挂到父 fiber | Day 025 + 11-23 复习 | 已掌握（11-23，Q2 正确） |
| children 优化机制 | 自测 Q5 只说「静态 jsx」；复述时把 bailout 主体说成父组件 | Day 027 + 11-23 复习 | 已掌握（11-23，Q3 正确） |
| Commit 子阶段 | 自测 Q1 把浏览器绘制算成 commit 子阶段 | Day 087 + 11-23 复习 | 已掌握（11-23，Q3 正确） |
| 更新函数与批处理 | 009 写 4、012 写 4、013 写 0（正确 1/3）；014 Q5 已答对 | Day 014 + 11-25 复习 | 已掌握（11-24） |
| 批处理范围 | 014 Q1 把 React 17 的事件处理也说成「不批处理」 | Day 014 已讲；11-25 复习 | 已复述（11-24） |
| flushSync 次数 | 014 Q2 以为 flushSync 固定 render 3 次 | Day 014 已讲；11-25 复习 | 已复述（11-24） |
| index key 机制 | 010 Q1 答得不具体；012 Q5 仍说「跳过 DOM 更新」；013 Q7 已答对 | Day 010 已讲 | 已掌握（11-24） |
| 事件委托位置 | 热身时说监听器挂在 fiber 节点；自测 Q3 已答对根容器 | Day 010 已讲；11-23 复习 | 已掌握（11-23，Q5 正确） |
| Hooks 调用规则 | 006 已能正确解释：hook 状态按调用顺序存在 fiber 链表上，条件调用导致节点错位 | 阶段 5 Hooks 源码深化 | 已纠正（11-20） |
| reducer 纯度与 StrictMode | 补测只说现象，没说出同引用 bailout 与双调用目的 | Day 016 已讲；11-26 复习 | 已纠正（11-25） |
| never 的职责 | 把 never 当成消灭不可能状态的工具 | Day 016 已讲；11-26 复习 | 已纠正（11-25） |
| dispatch 队列语义 | 以为 dispatch 立刻执行 reducer、执行次数固定 | Day 016 已讲；Day 020/089 深化 | 部分掌握（11-25） |

## 诊断结果（Day 001 填写）

- 自评总分：基础 4 / Hooks 4 / Context 3 / 性能 3 / 现代 React 2 / 生态 2 / 原理 2
- 闭卷答题情况：基础 6.5/10；现代 React 1/10；原理 2.5/8；生态 0.5/2；总分约 10/30
- 主要弱项：并发与 React 19 新 API、Commit/Scheduler/Suspense 源码、生态选型；Effect 清理与 Context 细节
- 计划调整建议：阶段 1 基础部分适度提速，保留项目与测试；阶段 2–5 按计划；诊断错题进入复习队列

## 学习日志

| 日期 | 课时 | 主题 | 时长 | 备注 |
|---|---|---|---|---|
| 2026-11-15 | 001 | 诊断与环境搭建 | ~2h | 诊断约 10/30；React 19.3 + Vite 8 + TS 7 + oxlint；StrictMode 双调用、memo bailout 实验；lint/build 通过 |
| 2026-11-16 | 002 | Vue→React 心智模型 I：渲染与状态 | ~2h | 快照/批处理/不可变更新；Todo 实现；纠正 StrictMode 顺序与 render 次数误解；自测 8.5/10；build 通过 |
| 2026-11-17 | 003 | Vue→React 心智模型 II：组件、组合与生命周期 | ~2h | props/emit/slots/Context；Card + UserCard + ThemeBadge + Modal；纠正 Context 引用与 Hooks 顺序；自测 6.5/10；build 通过 |
| 2026-11-18 | 004 | React 19.3 全景与生态地图 | ~2h | 19.0–19.3 时间线；Actions/Activity/Compiler/RSC 速览；Activity 实验；个人知识地图；自测 7/10；build 通过 |
| 2026-11-20 | 005 | 工程基线：Vite + TS + oxlint + Prettier + DevTools | ~2h（跨 11-19/20） | 五层基线；strict/alias/env/scripts；修 ThemeBadge 旧 import；Highlight/Profiler；基线清单；自测 6/10；四项检查全绿 |
| 2026-11-20 | 006 | 阶段复盘与学习系统校准 | ~2h（跨两次） | 热身 3.8/5；知识地图 + 三条因果链；弱项 Top 5；节奏校准；验收复述通过（修正 Vue 粒度/React 无依赖追踪）；闭卷自测 3.6/5；Vite 工具分工、RSC 水合进复习队列；阶段 0 完成 |
| 2026-11-22 | 007 | JSX 深入与组件本质 | ~2h（跨 11-20/22） | JSX 编译产物（jsx/jsxs、自动运行时）、组件即函数、大小写/表达式/Fragment；6 组件 + JsxLab；两轮 review 修 key/age=0/checked/footer guard；自测 4.4/6；typecheck/lint/build 通过 |
| 2026-11-22 | 008 | Props、children 与组合 | ~1.5h | 三种插槽映射；Card/Modal/UserList/SlotLab；修 UserList key 归属 + Card 未使用；自测 3.6/5；直接调用组件函数、children 优化进复习队列 |
| 2026-11-22 | 009 | 渲染与提交：纯函数、StrictMode、快照 | ~2h | 日志实验：StrictMode render 双调用/commit 一次、挂载 setup→cleanup→setup、子先父后/cleanup 父先子后；children bailout 实证；ImpureDemo dev 2/+2 vs build 1/+1；SnapshotDemo 0/1/3；自测 4.5/6；commit 子阶段与批处理算术进复习 |
| 2026-11-22 | 010 | 条件渲染、列表、key 与事件 | ~2h | KeyLab index vs id 输入错位实证；ResetWithKey 受控 + key 重置；EventLab capture 外→里/bubble 里→外/stop/prevent；自测 4.5/5；index key 机制与事件委托位置进复习 |
| 2026-11-22 | 011 | 项目 A：笔记卡片列表 | ~2h | 独立工程 projects/note-cards；组件拆分/受控搜索/派生过滤/空状态/SCSS Modules；review 删除 useMemo、补 trim/计数/key；项目自测 5.1/6；受控/非受控进复习 |
| 2026-11-23 | 012 | 周复盘与自测（第 2 周） | ~2h | 到期复习 2.7/3（Vite 分工答对，RSC 水合仍不精确）；周测验 4.9/6（更新函数 1/4 复发、index key 表述修正）；项目 A self-review；选定过滤逻辑抽离；受控/Commit/事件委托等已掌握 |
| 2026-11-24 | 013 | useState 深入与不可变更新 | ~2h（跨 11-23/24） | LazyInit 双调用实测；mutation 延迟生效；CartDemo 增删改/派生总价；自测 3.4/5，Q2/Q3/Q4 补测通过；11-24 到期 003/009/010/004 处理；RSC 水合/index key 已答对 |
| 2026-11-24 | 014 | 批处理、更新函数、状态提升 | ~1.5h | BatchingLab（StrictMode 2/2/4/2）；TemperatureCalculator 受控 + 状态提升；自测 3.9/5，Q1/Q2 复述通过；批处理范围/flushSync 进复习 |
| 2026-11-25 | 015 | 表单：受控/非受控与 v-model 对比 | ~1.5h（跨 11-24/25） | 受控注册表单（对象 state、radio 组、派生 errors、noValidate）；非受控 FormData 登录；自测 3.5/6，Q2/Q3/Q4/Q5 补测通过；11-25 到期项顺延 11-26 |
| 2026-11-25 | 016 | useReducer 与状态机思维 | 另一台电脑完成 | 代码已提交（fix: 016 over），TaskReducerDemo/StatusMachineDemo 通过检查；progress 本次补记；自测/细节记录待同步 |
| 2026-11-25 | 017 | Context 与 provide/inject | ~1.5h | Theme/User Context（null 默认 + 抛错 hook、useMemo value）；Task state/dispatch 拆分实验（TaskList 重渲染、TaskAddButton 不重渲染）；自测 5.6/6；Vue provide/inject 对比需补 |
