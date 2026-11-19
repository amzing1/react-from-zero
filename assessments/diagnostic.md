# Day 001 · React 摸底诊断

> **目的**：校准起点，不用于评判水平。不会的题直接写“不会”，比猜一个答案更有价值。
>
> **规则**：闭卷、限时 40 分钟、简要作答（每题 1–3 句话或关键词即可）。完成后把答案发给 Claude，一起讲评。
>
> **结果去向**：`progress.md` 的「诊断结果」与「薄弱点与补强」。

## Part 0 · 自评（5 min）

按 1–5 打分：1 = 没听过，2 = 知道名词，3 = 能用但不熟，4 = 熟练，5 = 能讲原理/带人。

| # | 主题 | 自评 |
|---|---|---|
| 1 | JSX 与组件基础 | 4 |
| 2 | state 与表单 | 4 |
| 3 | Hooks（useState/useEffect/useRef） | 4 |
| 4 | 自定义 Hook | 4 |
| 5 | Context | 3 |
| 6 | 性能优化（memo/Profiler） | 3 |
| 7 | 并发特性（Transition/Deferred/Suspense） | 2 |
| 8 | React 19 新 API（Actions/useOptimistic/use()/Activity） | 2 |
| 9 | 状态管理（Zustand/Redux/Jotai） | 2 |
| 10 | 服务端状态（TanStack Query） | 2 |
| 11 | 路由（React Router/TanStack Router） | 2 |
| 12 | 表单工程（react-hook-form/zod） | 2 |
| 13 | 样式与组件库（Tailwind/shadcn/Radix） | 3 |
| 14 | 测试（Vitest/RTL/Playwright） | 2 |
| 15 | Next.js 与 RSC | 2 |
| 16 | React 底层原理与源码 | 2 |

## Part 1 · React 基础（10 题）

1. React 组件为什么应保持纯函数？在 render 阶段做副作用可能发生什么？
  副作用函数频繁执行
2. `setCount(count + 1)` 连续调用两次为什么可能只加 1？写出正确写法并解释。
  闭包
  `setCount((count) => count + 1)`
3. key 的作用是什么？为什么用数组 index 作为 key，在列表重排/插入时可能出错？
   唯一标识，diff算法会根据key和tag是否相同来表明节点能否复用，数组列表中顺序改变会让 react diff 过程中认为可以复用，但实际应重新渲染
4. 受控组件与非受控组件的区别？各自适合什么场景？
   受控组件：通过 react state 管理表单 value
   非受控组件：通过 useRef 获取 dom 元素管理表单 value
   试用场景不清楚
5. `useEffect` 的依赖数组不写、空数组、写依赖分别意味着什么？清理函数何时执行？
   不写：一直执行，空数组：挂载的时候执行一次，写依赖：当依赖数组中的任意元素地址发生变化后执行，清理函数会在组件卸载的时候执行
6. useEffect 中为什么可能读到旧的 state？至少说出两种解决思路。
  好像说是闭包陷阱，解决思路，通过useRef 缓存 state，添加依赖state
7. `useMemo`、`useCallback`、`React.memo` 分别优化什么？什么情况下不该用？
   useMemo 缓存计算结果，useCallback 缓存函数对象，React.memo 用于缓存组件，当组件 props 未发生变化时不执行重新渲染
8. Context 的值变化时，哪些组件会重新渲染？如何减少不必要的渲染？
   后代组件中订阅了 context 该值的时候会重新渲染，应该是后代组件只订阅自己需要的值
9. 自定义 Hook 和普通函数的区别？为什么 Hooks 不能在条件语句中调用？
   hook 中的一些状态会被 react 保存，hooks 会以链表的形式被 react 内部维护，前后链表必须一致
10. Error Boundary 能捕获哪些错误？不能捕获哪些？
    不知道

## Part 2 · 现代 React（10 题）

11. 并发渲染解决了什么问题？“渲染可中断”具体意味着什么？
    一次渲染一个长列表不会阻塞用户操作
12. `useTransition` 和 `useDeferredValue` 的区别与适用场景。
    不清楚
13. `useSyncExternalStore` 为什么存在？它解决的“撕裂（tearing）”是什么？
    不清楚
15. Actions、`useActionState`、`useFormStatus`、`useOptimistic` 分别解决什么问题？
    不知道
16. `use()` 能做什么？为什么它要求数据有缓存或 Suspense 边界？
    不知道
17. `<Activity>` 与 Vue 的 `keep-alive` 有何相似之处？隐藏时 effect 和状态会怎样？
    不知道
18. React Compiler 做了什么？开启之后还需要手写 `useMemo`/`useCallback` 吗？
    听说过，会自动帮你优化缓存，无需手写
19. RSC 和 SSR 的区别是什么？`"use client"` 边界应该怎么划？
    没做过 rsc ssr
20. Server Actions 与普通 REST 请求相比有什么不同？有哪些安全注意点？
    不知道
21. React 19.3 你了解哪些新 API 或行为变化？
    不知道

## Part 3 · 底层原理（8 题）

21. Fiber 是什么？解决什么问题？说出至少 4 个关键字段。
    将同步调和过程变为异步可终端调和过程，内部数据不清楚
22. React 的 diff 策略是什么？key 在 reconciliation 中起什么作用？
    根据 key 和 tag 表示节点都否复用
23. Lane 模型解决什么问题？为什么用位运算？
    定义操作优先级，不清楚为什么要用位运算
24. Scheduler 如何实现时间切片？优先级如何决定？
    不清楚
25. Hooks 在底层如何存储？为什么规则是“只在顶层调用”？
    链表，不能破环链表顺序
26. commit 阶段分为哪些子阶段？`useLayoutEffect` 和 `useEffect` 分别何时执行？
    beforeMutation / mutation / afterMutaiton，useLayoutEffect 在 beforeMutation时执行，useEffect 在 afterMutation 时执行
27. Suspense 底层大致如何工作？throw promise 之后发生了什么？
    不清楚，没用过 suspense 但听说过
28. React Compiler 和 RSC 的实现各依赖什么关键机制？
    不知道

## Part 4 · 生态与工程（2 题）

29. 本地状态、共享状态、服务端状态、URL 状态、表单状态如何划分？Zustand / Redux / TanStack Query 各适合什么？
    zustand / redux 类似 pinia
    tanstack query 用于缓存接口中返回的数据，具体使用和为什么使用不清楚
30. React Router 的 loader/action 与在组件里用 useEffect 取数相比，有什么优势？
    不知道

## Part 5 · 编码摸底（选做，20 min）

用 React + TypeScript 实现：

- 一个受控输入框
- 根据输入过滤一个列表
- 有加载态、空状态、错误态（数据可 mock）
- 把过滤/请求逻辑抽成一个自定义 Hook
写完后回答两个问题：

1. 哪些地方可能产生不必要的重渲染？你会怎么验证？
   不知道
2. 如果输入很快，你会用什么策略控制请求频率？为什么？
   节流
   

---

## 讲评后填写

- 闭卷得分：约 10/30（基础 6.5/10；现代 React 1/10；原理 2.5/8；生态 0.5/2）
- 最大认知缺口：现代 React（并发/Actions/RSC）、底层原理（Commit/Scheduler/Suspense）、生态（Query/路由/表单/测试）
- 需要提前补的课时：020–021（Effect）、023/039（Suspense）、043–066（生态）、085–096（原理）
- 计划调整：阶段 1 的 JSX/组件/state 适度提速，保留动手与项目；阶段 2–5 按原计划；错题加入每日热身。

## 讲评要点

- **Q1 纯函数**：render 可能多次执行，副作用会重复/泄漏；纯函数是 bailout、Compiler、可中断渲染的前提。
- **Q5 Effect**：cleanup 在每次重跑前和卸载时执行；依赖按 `Object.is` 比较；`useEffect` 绘制后，`useLayoutEffect` 绘制前。
- **Q8 Context**：所有消费者都会重渲染；拆分 Context/稳定 value/组合/selector 才能减少。
- **Q10 Error Boundary**：只捕获后代 render/生命周期/constructor 错误；不捕获事件、异步、SSR、自身错误。
- **Q26 commit**：beforeMutation → mutation → layout → passive；`useLayoutEffect` 在 layout，`useEffect` 在 passive。
- **编码题**：搜索用 debounce，不用 throttle；配合 `AbortController`；deferred/transition 管渲染优先级，不管请求频率。
