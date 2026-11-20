# 错题与薄弱点

> 规则：每次自测/练习/项目 review 发现的错误都记在这里；按 1/3/7/15 天重测。
> 一条记录只写一个知识点，便于复习。

## 记录模板

| 日期 | 主题 | 我的错误理解 | 正确理解 | 触发场景 | 重测日期 | 状态 |
|---|---|---|---|---|---|---|
| 2026-11-16 | StrictMode 执行顺序 | 开发环境是 render → commit → render，DOM 提交两次 | 双调用发生在 render 阶段（每次 render 都双调用）；commit 只一次；Effect 在首次挂载后 setup → cleanup → setup | Day 002 热身 Q2 | 2026-11-17 | 已复习（11-17） |
| 2026-11-16 | setState 批处理与 render 次数 | 同一事件里两次 setState 会触发两次 render | 自动批处理，一次 render；StrictMode 开发环境把这次 render 双调用，日志才多 | Day 002 检查点 | 2026-11-19 | 已复习（11-20，快照读取正确） |
| 2026-11-16 | 不可变更新 | toggle 时只展开外层数组，内部直接 `v.done = true` | 命中项返回 `{ ...v, done: !v.done }`，其余项返回原引用 | Day 002 Todo review | 2026-11-17 | 已复习（11-17） |
| 2026-11-16 | 数组删除 | `filter(v => v.id === id)` 保留的是要删的项；Vue 笔记中丢弃 filter 返回值 | 删除用 `!==`；`filter` 返回新数组，Vue 中也必须重新赋值 | Day 002 Todo / Vue 笔记 | 2026-11-17 | 已复习（11-17） |
| 2026-11-16 | 重渲染优化手段 | 认为“把 count 提升到组件外”能减少子组件渲染 | 手段是 memo、状态下移、稳定 children element、静态 JSX 提到模块层、React Compiler；把 count 移走等于删掉更新 | Day 002 自测 Q3 | 2026-11-17 | 已复习（11-17） |
| 2026-11-17 | Context value 引用 | 以为 theme 没变，消费者就不会重渲染 | 内联 `value={{ theme, toggleTheme }}` 每次 Provider 渲染都是新对象，`Object.is` 失败，所有消费者重渲染；Context 不按字段追踪 | Day 003 自测 Q3 | 2026-11-20 | 已复习（11-20，value 引用答对） |
| 2026-11-17 | Hooks 调用顺序 | 知道提前 return 不对，但说不出原因 | Hooks 必须按固定顺序/数量调用；条件 return 导致 hook 数量变化，报 `Rendered fewer hooks than expected` | Day 003 自测 Q4 | 2026-11-18 | 已复习（11-18，链表顺序） |
| 2026-11-17 | Modal 生命周期与 Effect 依赖 | 初版 Effect 无依赖数组，在 setup 里根据 open 打印 unmount | 父组件条件挂载；Effect 空依赖挂载一次；mount/unmount 分别在 setup/cleanup 打印 | Day 003 动手 review | 2026-11-18 | 已复习（代码修正 + Activity cleanup 观察一致） |
| 2026-11-18 | useOptimistic | 不知道它的作用 | action 进行期间先展示预期结果，结束/失败后自动回滚；用于点赞、评论、购物车 | Day 004 自测 Q2 | 2026-11-19 | 已复习（11-20，答出乐观更新） |
| 2026-11-18 | RSC 与水合 | 认为 RSC 也由前端水合；Server Component 限制说不全 | Server Component 不进入客户端 bundle、不 hydrate；只有 Client Component 会 hydrate；限制：不能用 state/Effect/DOM/browser API，props 可序列化 | Day 004 自测 Q5 | 2026-11-21 | 部分掌握（11-20 水合概念仍有误） |
| 2026-11-20 | Vite 8 构建内核 | 认为 build 使用 Rollup | Vite 8 build 内核是 Rolldown（API 兼容 Rollup）；dev 转换器是 Oxc | Day 005 自测 Q1 | 2026-11-21 | 未复习 |
| 2026-11-20 | TypeScript strict 家族 | 只记得 strictNullChecks，把 noUncheckedIndexedAccess 混在一起 | strict 含 8 项；noUncheckedIndexedAccess 是独立选项，索引访问返回 `T \| undefined` | Day 005 自测 Q3 | 2026-11-21 | 未复习 |
| 2026-11-20 | 类型导入选项 | 不知道 verbatimModuleSyntax / erasableSyntaxOnly | 前者强制 `import type`；后者禁止 enum/namespace/参数属性等不可擦除语法 | Day 005 自测 Q4 | 2026-11-21 | 未复习 |

## 高频错误清单

### 状态与渲染

| 错误 | 正确理解 | 状态 |
|---|---|---|
|  |  |  |

### Hooks 与 Effect

| 错误 | 正确理解 | 状态 |
|---|---|---|
|  |  |  |

### 并发与 React 19

| 错误 | 正确理解 | 状态 |
|---|---|---|
|  |  |  |

### 生态与工程化

| 错误 | 正确理解 | 状态 |
|---|---|---|
|  |  |  |

### 底层原理

| 错误 | 正确理解 | 状态 |
|---|---|---|
|  |  |  |

## 复习记录

| 日期 | 复习内容 | 结果 | 下一步 |
|---|---|---|---|
| 2026-11-16 | 001 到期项：StrictMode/render-commit、Effect cleanup/依赖比较 | Q3 基本正确；Q2 对 StrictMode 顺序理解错误 | 已写入错题，11-17 重测 |
| 2026-11-16 | 002 闭卷自测（快照、不可变、重渲染范围、render/commit） | 8.5/10；主要问题在批处理 render 次数与优化手段 | 已写入错题，11-17 重测 |
| 2026-11-17 | 002 到期项 + 错题重测（批处理/快照、StrictMode、不可变、重渲染范围） | 批处理与不可变已掌握；`console.log` 快照读取仍答错；StrictMode 与优化手段已纠正 | 快照项 11-19 再测 |
| 2026-11-17 | 003 闭卷自测（组件接口、事件回调、Context、挂载/卸载） | 6.5/10；Context value 引用与 Hooks 顺序是主要问题 | 已写入错题，11-18 重测 |
| 2026-11-18 | 001/003 到期项 + 错题重测（commit 子阶段、element、组件接口、Context） | commit/element/插槽已纠正；Context value 引用仍未答出；Hooks 顺序已掌握 | Context 11-20 再测 |
| 2026-11-18 | 004 闭卷自测（版本主线、Actions、Activity、Compiler、RSC） | 7/10；useOptimistic 与 RSC/SSR 水合是主要缺口 | 已写入错题，11-19 重测 |
| 2026-11-20 | 005 闭卷自测（Vite/TS/alias/sourcemap/DevTools）+ Context 到期复习 | 6/10；Rolldown、strict 家族、类型导入选项是主要缺口；Context value 已答对 | 已写入错题，11-21 重测 |
