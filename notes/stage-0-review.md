# 阶段 0 复盘与校准（Day 006）

> 建立日期：2026-11-20 | 状态：已完成（2026-11-20）
> 对应课时：006 · 阶段复盘与学习系统校准
> 收尾：001 节点句（已代填）→ 验收复述（已通过）→ 闭卷自测（3.6/5）→ 006 已勾选

## 一、阶段 0 知识地图

主线：**UI = f(state)**。

| 节点 | 一句话 |
|---|---|
| 001 诊断 | 闭卷基线约 10/30（基础 6.5、现代 React 1、原理 2.5、生态 0.5），据此确认：阶段 1 基础可适度提速但项目与测试不压缩，现代 React/原理/生态按原阶段推进，错题进复习队列。（Claude 代填，基于 Day 001 记录） |
| 002 渲染与状态 | UI = f(state)；render 执行组件函数生成新元素树，commit 才更新 DOM；state 是快照，更新必须产生新引用。 |
| 003 组件模型 | 组件是函数，入参是 props（children 也是 props）；跨层用 Context；Hooks 按固定顺序调用。 |
| 004 React 19 全景 | 19.0 Actions/RSC → 19.2 Activity/useEffectEvent → 19.3 ViewTransition/Fragment refs；三层模型：使用 / 性能 / 原理。 |
| 005 工程基线 | Vite 8（Oxc dev / Rolldown build）、TS 7 project references、oxlint + Prettier、环境变量类型、React DevTools + sourcemap；五层独立可执行。 |

```text
001 诊断 ──▶ 002 渲染与状态 ──▶ 003 组件模型 ──▶ 004 React 19 全景
                  │                    │                    │
                  └──────▶ 005 工程基线 ◀───────────────────┘
```

## 二、三条因果链

1. **Hooks 顺序**：因为组件函数每次 render 都重新执行，而 hook 状态按**调用顺序**存在 fiber 的链表上，所以 Hooks 必须固定顺序；条件调用会让第 N 次调用对应到错误的链表节点。
2. **不可变更新**：因为 `Object.is` 比较引用，所以原地修改不会触发更新，必须返回新引用；DevTools 用来验证哪些组件真的重渲染、为什么重渲染。
3. **Context 与 Compiler**：因为 Context value 按 `Object.is` 比较，内联 value 每次都是新引用，所以消费者额外重渲染；Compiler 在**符合 Rules of React、可静态分析**时自动 memo 化 value，减少引用变化；推断不了的场景仍需手写 `useMemo` 或拆分 Context。

## 三、`UI = f(state)` 三句话

1. state 是输入；state 更新时，React 调度**拥有该 state 的组件实例**重新执行，并给这次 render 一份新快照。
2. render 执行组件函数，返回新的元素树，再与**当前 fiber 树**做 reconcile，给需要变更的 fiber 打标记。
3. commit 按标记更新 DOM → `useLayoutEffect` → 绘制 → `useEffect`；DevTools 的 Highlight updates 看哪些组件重渲染，Profiler 看 commit 次数和「Why did this render?」（需开启采集）。

## 四、弱项 Top 5（证据化排序）

排序公式：`优先级 = 影响面 × 出现频率 ÷ 补强成本`。

| 弱项 | 证据 | 影响面 | 频率 | 成本 | 得分 | 补强课时 | 验收方式 |
|---|---|---|---|---|---|---|---|
| strict 家族 | Day 005 自测 Q3 + Day 006 热身 Q2（只答出 3/8） | 3 | 4 | 1 | 12 | 006 复习卡 + 007 热身 | 闭卷列出 8 项 + 解释 `noUncheckedIndexedAccess` |
| Vite 8 架构 | Day 005 自测 Q1 + Day 006 热身 Q1（dev 转换器答成 esbuild） | 2 | 5 | 1 | 10 | 006 复习卡 + 11-21 复习 | 闭卷答出 Oxc dev / Rolldown build + dev 不打包原因 |
| 快照读取 | Day 001 诊断 Q2、Day 002 复习、Day 006 任务 D | 5 | 3 | 2 | 7.5 | 013–014 + 每日热身 | 能预测 `console.log` / 闭包读到旧值，并写出不可变更新 |
| Effect 清理 | Day 001 诊断 Q5、Day 003 Modal review | 5 | 3 | 2 | 7.5 | 020–021 | 能说出 cleanup 时机、依赖比较、竞态处理 |
| Context 重渲染 | Day 003 自测 Q3、Day 005 复习 | 4 | 3 | 2 | 6 | 017 | 能解释内联 value 问题并给出两种解法 |
| RSC/水合 | Day 004 自测 Q5、Day 006 热身 Q3 | 4 | 3 | 3 | 4 | **阶段 4 前置**，不占阶段 1 名额 | 阶段 4 开课前能说出 RSC vs SSR + 限制 |

## 五、阶段 1 第 2 周校准

**节奏**：保持原计划，不额外加速或减速（用户决定 2026-11-20）。007–012 按计划推进，重点课时保持完整动手与复习。

**个人补充 3 条**

1. 每日热身加 1 道弱项题（从 strict / Vite 8 / 快照读取 / Effect 清理 / Context 重渲染里轮换）
2. 每周一次 Profiler 观察（Highlight updates + Profiler，验证一次真实重渲染）
3. 每周末 30 分钟错题重测（只测 `notes/mistakes.md` 里未掌握的条目）

**不可妥协 3 条**

1. 动手 ≥50% 时间——React API 少，肌肉记忆只能靠写
2. 每课 3 个复习问题当天进队列——间隔复习是对抗遗忘的唯一机制
3. 020–021、017、027、028 不跳——Effect、Context、性能、测试是工作落地和诊断弱项的交汇点

## 六、阶段 0 验收表述（草稿，待闭卷复述确认）

> Vue 的响应式更新和 React 的重新渲染，根本差异是什么？

**Vue**：`reactive` 通过 Proxy 的 `get` 把当前活跃 effect 收集到模块级 `targetMap`（WeakMap：target → key → dep 集合）；`set` 时 `trigger` 该属性对应的 dep 集合，只重跑读过这个属性的 effect。`ref` 不是 Proxy，而是 `RefImpl` 的 getter/setter + 自己的 dep，原理一致。更新是**依赖级、细粒度**的，可以直接修改响应式对象。

**React**：state 是组件实例私有的快照；`setState` 触发 dispatch，先用 `Object.is` 比较新旧 state，不同则调度**拥有该 state 的组件实例**重新 render；render 执行组件函数返回新的元素树，再与当前 fiber 树 reconcile，最后 commit 更新 DOM 并执行副作用。React 不追踪哪个组件读了哪个 state，所以是**组件级重渲染 + 元素树 diff**，不是「新快照 vs 旧快照」的 diff。

**为什么必须不可变更新**：

1. `Object.is` bailout——同引用直接跳过
2. 快照稳定性——旧 render 的闭包不能被原地修改污染
3. 并发渲染——需要保留多个版本，可中断/重启
4. Compiler 的 Rules of React 假设

**已确认（2026-11-20）**：React 侧最终表述为——只知道「拥有该 state 的组件」，不知道后代是否真的用了这份 state；因为没有依赖追踪，更新边界只有组件树，所以默认重渲染整棵子树，再靠 reconcile 找差异。

## 七、收尾记录（2026-11-20）

- [x] 001 节点句（Claude 代填；用户确认记账类任务不占用学习时间）
- [x] 闭卷复述验收表述：通过（修正 Vue 粒度、React 无依赖追踪）
- [x] 闭卷自测 5 题：3.6/5，讲评完成
- [x] 勾选 006，更新 `progress.md` 复习队列与学习日志

## 八、闭卷自测结果（Day 006）

| 题 | 得分 | 结果 |
|---|---|---|
| 1 快照与 `UI = f(state)` | 0.9 | ✅ 链路正确；补批处理与 fiber reconcile |
| 2 重渲染与跳过手段 | 0.6 | ⚠️ `useMemo` 不能跳过子组件渲染，应为 `memo` / 状态下移 / 内容提升 |
| 3 Context 重渲染 | 1.0 | ✅ 消费者重渲染 + 拆分/`useMemo` |
| 4 Vite 8 工具分工 | 0.6 | ⚠️ 预构建归 Rolldown、压缩归 Oxc；「Oxc 单文件、Rolldown 多文件」 |
| 5 RSC 与水合 | 0.5 | ⚠️ Server Component 不 hydrate；RSC 中的 Client Component 照常 hydrate |

总分：**3.6 / 5（7.2 / 10）**。错题已写入 `notes/mistakes.md`，11-21 重测。
