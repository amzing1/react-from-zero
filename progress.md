# React 学习进度

> 本文件是**唯一进度源**。每次学习结束后由 Claude 更新；未确认完成的内容不勾选。
>
> 标记说明：`[ ]` 未完成 · `[x]` 已完成 · 🔁 需复习 · ⏸ 暂停/跳过

## 当前状态

- **当前阶段**：阶段 0 · 起跑
- **下一个课时**：005 · 工程基线：Vite + TS + ESLint + DevTools
- **进行中**：无
- **已完成**：4 / 108
- **连续学习**：4 天
- **开始日期**：2026-11-15
- **最近更新**：2026-11-18
- **计划周期**：18 周（每天约 2 小时，每周 6 天）

## 阶段进度

| 阶段 | 课时范围 | 完成 |
|---|---|---|
| 0 · 起跑 | 001–006 | 4 / 6 |
| 1 · React 核心 | 007–030 | 0 / 24 |
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
- [ ] 005 · 工程基线：Vite + TS + ESLint + DevTools
- [ ] 006 · 阶段复盘与学习系统校准

### 阶段 1 · React 核心（第 2–5 周）

**第 2 周 · 组件与渲染**

- [ ] 007 · JSX 深入与组件本质
- [ ] 008 · Props、children 与组合
- [ ] 009 · 渲染与提交：纯函数、StrictMode、快照
- [ ] 010 · 条件渲染、列表、key 与事件
- [ ] 011 · 项目 A：笔记卡片列表
- [ ] 012 · 周复盘与自测

**第 3 周 · 状态与表单**

- [ ] 013 · useState 深入与不可变更新
- [ ] 014 · 批处理、更新函数、状态提升
- [ ] 015 · 表单：受控/非受控与 v-model 对比
- [ ] 016 · useReducer 与状态机思维
- [ ] 017 · Context 与 provide/inject
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
| 2026-11-19 | 002 | 1) React 用什么判断 state 变化？2) 为什么必须不可变？3) setList([...list]) 的隐患？ | 待复习 |
| 2026-11-19 | 004 | 1) 19.0/19.2/19.3 主线+代表 API？2) Actions 三件套分工？3) Activity hidden 的 state/Effect 行为？ | 待复习 |
| 2026-11-20 | 003 | 1) 内联 Context value 为何导致额外重渲染？2) 与 provide/inject 的追踪差异？3) 两种减少重渲染的方法？ | 待复习 |
| 2026-11-21 | 004 | 1) RSC 与 SSR 的区别？2) Server Component 的限制？3) Compiler 后何时仍需手写 memo？ | 待复习 |
| 2026-11-22 | 001 诊断 | Context value 变化时哪些组件重渲染？如何减少？ | 待复习 |
| 2026-11-22 | 001 学习 | createRoot 相比 ReactDOM.render 的变化？为什么函数式更新更安全？ | 待复习 |
| 2026-11-23 | 002 | 1) 父组件更新子组件默认重渲染吗？Vue 呢？2) 三种跳过手段？3) Vue 为何仍需 diff？ | 待复习 |
| 2026-11-24 | 003 | 1) 条件挂载 vs 提前 return 的生命周期差异？2) 为何 Hooks 不能条件调用？3) StrictMode 下 Modal 日志？ | 待复习 |
| 2026-11-25 | 004 | 1) 三层模型与使用顺序？2) 生态选型：状态/服务端状态/路由？3) 19.3 新能力（ViewTransition/Fragment refs/browser）？ | 待复习 |
| 2026-12-01 | 002 | 1) render/commit 各做什么？2) render 为何必须纯？3) StrictMode 双调用范围与 Effect 处理？ | 待复习 |
| 2026-12-02 | 003 | 1) Vue 生命周期/指令/样式映射？2) 作用域插槽怎么实现？3) React 19 Context/ref-as-prop 新写法？ | 待复习 |
| 2026-12-03 | 004 | 1) 19.0–19.3 各解决什么问题？2) Actions 与普通事件处理的区别？3) use() 的 Promise 缓存要求？ | 待复习 |

## 待解决疑问

| 日期 | 问题 | 结论/状态 |
|---|---|---|
| — | 暂无 | — |

## 薄弱点与补强

| 主题 | 表现 | 补强安排 | 状态 |
|---|---|---|---|
| 现代 React（并发/Actions/RSC） | Actions/useOptimistic/use/RSC 仅知道名词；Activity 跑过 demo | 阶段 2/4 正常推进 + 每日热身 | 待补 |
| 底层原理（Commit/Scheduler/Suspense） | Commit 子阶段混淆；Scheduler/Suspense 不清楚 | 阶段 5；Day 023/039 预热 | 待补 |
| 生态（Query/路由/表单/测试） | 知道名字，不清楚边界与选型 | 阶段 3 | 待补 |
| useEffect 依赖与清理 | 会用，但 cleanup 时机和依赖比较不完整 | Day 020–021 + 复习队列 | 待补 |
| Context 重渲染 | 误以为只订阅需要的字段即可；内联 value 对象导致所有消费者额外重渲染 | Day 017 + 复习队列 | 待补 |
| 状态快照与不可变更新 | 不可变与批处理已纠正；`console.log` 快照读取仍不稳 | Day 013–014 + 1/3/7/15 复习 | 待补 |
| Hooks 调用规则 | 知道不能条件调用，但说不清原理；条件挂载与提前 return 混淆 | Day 003 已纠正 + 阶段 5 Hooks 源码 | 待补 |

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
