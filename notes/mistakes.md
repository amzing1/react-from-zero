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
| 2026-11-18 | RSC 与水合 | 认为 RSC 也由前端水合；Server Component 限制说不全 | Server Component 不进入客户端 bundle、不 hydrate；只有 Client Component 会 hydrate；限制：不能用 state/Effect/DOM/browser API，props 可序列化 | Day 004 自测 Q5 | 2026-11-21 | 未掌握（11-20 自测 Q5 仍说「RSC 无水合」） |
| 2026-11-20 | Vite 8 构建内核 | 认为 build 使用 Rollup | Vite 8 build 内核是 Rolldown（API 兼容 Rollup）；dev 转换器是 Oxc | Day 005 自测 Q1 | 2026-11-21 | 未复习 |
| 2026-11-20 | TypeScript strict 家族 | 只记得 strictNullChecks，把 noUncheckedIndexedAccess 混在一起 | strict 含 8 项；noUncheckedIndexedAccess 是独立选项，索引访问返回 `T \| undefined` | Day 005 自测 Q3 | 2026-11-21 | 未复习 |
| 2026-11-20 | 类型导入选项 | 不知道 verbatimModuleSyntax / erasableSyntaxOnly | 前者强制 `import type`；后者禁止 enum/namespace/参数属性等不可擦除语法 | Day 005 自测 Q4 | 2026-11-21 | 未复习 |
| 2026-11-20 | Vite 8 dev 转换器 | 认为 dev 转换器是 esbuild | Vite 8 dev 用 Oxc，build 用 Rolldown；esbuild 是 Vite 7 及以前 | Day 006 热身 Q1（005 同款错题） | 2026-11-21 | 未复习 |
| 2026-11-20 | StrictMode 执行顺序（回归） | render → commit → render | 开发模式 render 双调用、commit 一次；挂载后 Effect 是 setup → cleanup → setup | Day 006 知识地图 | 2026-11-22 | 未复习（11-16 已纠正，出现回归） |
| 2026-11-20 | React 更新机制 | 新快照与旧快照 diff 决定是否更新 | dispatch 用 `Object.is` 比较新旧 state；不同则调度拥有该 state 的组件实例重渲染；render 返回新元素树，与当前 fiber 树 reconcile；commit 更新 DOM | Day 006 任务 D | 2026-11-22 | 未复习 |
| 2026-11-20 | Hook 顺序的原因 | 因为状态是快照，所以 Hooks 必须固定顺序 | 因为组件函数每次 render 重新执行，hook 状态按调用顺序存在 fiber 链表上；条件调用导致第 N 个 hook 对应错节点 | Day 006 因果链 1 | 2026-11-22 | 未复习 |
| 2026-11-20 | state 的归属 | 调度所有持有该 state 的组件 | state 是组件实例私有；调度拥有该 state 的组件实例，子树默认重渲染，除非 memo/bailout | Day 006 任务 D | 2026-11-22 | 未复习 |
| 2026-11-20 | Context 与 Compiler | Provider 本身导致消费者额外渲染；Compiler 自动补 useMemo/useCallback | Context value 引用变化导致所有消费者重渲染；内联 value 每次新引用；Compiler 在符合 Rules of React、可静态分析时自动 memo 化 value | Day 006 因果链 3 | 2026-11-23 | 未复习 |
| 2026-11-20 | Vue/React 更新粒度 | Vue 的更新细粒度是组件级 | Vue 的依赖追踪是属性级（targetMap 精确到 key），触发范围是读过该属性的 effect；render 执行仍是组件级。React 没有依赖追踪，只有组件树边界，默认重渲染整棵子树，靠 reconcile 找差异 | Day 006 验收复述（两次） | 2026-11-21 | 未复习 |
| 2026-11-20 | useMemo 与 memo | 用 useMemo 跳过子组件重渲染 | useMemo 稳定的是值；跳过子组件渲染需要 React.memo、状态下移、内容提升（children/静态元素），或 Compiler | Day 006 自测 Q2 | 2026-11-21 | 未复习 |
| 2026-11-20 | Vite 8 工具分工 | Oxc 负责依赖预构建，Rolldown 负责压缩混淆 | Oxc 管单文件（解析/转换/压缩）；Rolldown 管多文件（预构建/打包/tree-shaking/chunk） | Day 006 自测 Q4 | 2026-11-21 | 未复习 |
| 2026-11-20 | RSC 水合（回归） | RSC 无水合 | Server Component 永不 hydrate；RSC 中的 Client Component 照常 hydrate；RSC 与 SSR 正交可叠加 | Day 006 自测 Q5 | 2026-11-21 | 未复习 |
| 2026-11-22 | JSX 编译与组件大小写 | `<div>` 是普通 DOM、`<Foo>` 转 `_jsx`，没答出第一个参数 | `<div>` → `_jsx('div', ...)` 字符串 tag；`<Foo>` → `_jsx(Foo, ...)` 变量引用；大小写是编译器判断 host/组件的信号 | Day 007 自测 Q2 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | Fragment 短语法 key | 认为短语法可以加 key | `<>...</>` 不能传 props；`<Fragment key={id}>` 可以 | Day 007 自测 Q4 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | Vite 依赖预构建归属 | 漏答预构建归谁 | 预构建是打包行为，Vite 8 归 Rolldown；Oxc 管单文件解析/转换/压缩 | Day 007 自测 Q6 | 2026-11-23 | 未复习 |
| 2026-11-22 | 受控 checkbox | `<input type="checkbox">` 用 `value` 表示勾选状态 | 勾选状态是 `checked`；`value` 是表单提交值；受控 = `checked` + `onChange` | Day 007 动手 review | 2026-11-23 | 已修正（代码） |
| 2026-11-22 | 可选 prop 哨兵 | 用 `footer !== null` 判断可选 prop；修正时又写成 `\|\|` 恒真 | 可选 prop 省略时是 `undefined`；用 `!= null` 或 `!== undefined`；`!=` 宽松相等同时覆盖 null/undefined | Day 007 动手 review | 2026-11-23 | 已修正（代码） |
| 2026-11-22 | 直接调用组件函数 | `{Header()}` 只是绕过了 reconcile 阶段 | 直接在父 render 里执行函数，不创建自己的 fiber；Header 的 Hooks 挂到父 fiber 的 hook 链表，导致顺序/数量错乱；必须写 `<Header />` | Day 008 自测 Q3 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | children 优化机制 | 只知道「静态 jsx」；复述成父组件自己 bailout | 外层传入的 children 元素引用稳定；父组件因自身 state 重渲染时，是 **children 子树** 可以 bailout，不是父组件；静态 JSX 提升是同一机制 | Day 008 自测 Q5 | 2026-11-23 | 部分掌握（11-22） |
| 2026-11-22 | Commit 子阶段 | 把浏览器绘制（draw）算作 commit 子阶段 | Commit 四子阶段：beforeMutation → mutation → layout → passive；绘制在 layout 与 passive 之间，由浏览器完成 | Day 009 自测 Q1 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | 更新函数批处理 | 三次 `setN(x => x + 1)` 从 0 开始结果写成 4 | 队列依次执行：0→1→2→3，结果 3；三次 `setN(n + 1)` 结果 1 | Day 009 自测 Q5 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | StrictMode 生产环境 | 只答了开发环境双调用，漏生产 | 生产：render 1 次、commit 1 次、挂载 Effect setup 一次；更新时 cleanup → setup | Day 009 自测 Q3 | 2026-11-23 | 未复习 |
| 2026-11-22 | 快照时点 | 认为 commit 完成后旧闭包就能读到新值 | 当前事件处理闭包永远读当次 render 的快照；新值出现在下一次 render 的闭包/JSX 中；setState 只排队 | Day 009 自测 Q4 | 2026-11-23 | 已纠正（11-22） |
| 2026-11-22 | index key 机制 | 只说「React 认为所有 DOM 可复用」，没答出「按位置匹配」 | index key 表示位置；重排时 key 0 仍匹配 key 0，React 把位置 0 的 DOM/组件 state 复用给新数据；非受控输入值/勾选状态留在原地 | Day 010 自测 Q1 | 2026-11-23 | 部分掌握（11-22） |
| 2026-11-22 | 事件委托位置 | 热身时说监听器挂在 fiber 节点上 | React 17+ 把监听器挂在 createRoot 的根容器 DOM 上；fiber 只是内部数据结构；事件沿 React 树模拟捕获/冒泡 | Day 010 热身 Q3 | 2026-11-23 | 已纠正（11-22） |
| 2026-11-22 | 受控 vs 非受控 | 认为不写 `value` 时重渲染会把值清空 | 非受控的输入值由 DOM 管；重渲染保留，卸载/重挂载才重置；真正的问题是 state 与 DOM 分叉，清除筛选无法清空输入框 | Day 011 自测 Q6 | 2026-11-23 | 部分掌握（11-22） |
| 2026-11-22 | useMemo 滥用 | 在 8 条数据的过滤上用 useMemo，且 selectedTags 每次新数组导致依赖必变 | 便宜计算直接算；useMemo 只在计算贵或需要引用稳定时用；React 19 不默认 memo | Day 011 项目 review | 2026-11-23 | 已修正（11-22） |

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
| 2026-11-20 | 006 热身 + 知识地图 + 三条因果链 + 任务 D | 热身 3.8/5；知识地图 002–005 完成（001 待补）；三条链修正后通过；任务 D React 侧仍有「所有持有 state 的组件」需改为「拥有者实例」 | 已写入错题；下次先补 001 + 闭卷自测 |
| 2026-11-20 | 006 验收复述 + 闭卷自测 | 复述通过；自测 3.6/5；Vue/React 粒度、useMemo/memo、Vite 工具分工、RSC 水合是缺口 | 已写入错题，11-21 重测 |
| 2026-11-22 | 007 闭卷自测（6 题，含 11-21 到期 Vite 分工） | 4.4/6；JSX 大小写、Fragment key、依赖预构建归属是缺口 | 已写入错题，11-23 重测 |
| 2026-11-22 | 008 闭卷自测（5 题） | 3.6/5；直接调用组件函数、children 优化是缺口；Q3 复述通过，Q5 需再测 | 已写入错题，11-23 重测 |
| 2026-11-22 | 009 闭卷自测（6 题） | 4.5/6；commit 子阶段、生产 StrictMode、快照时点、批处理算术是缺口；Q5 已复述 | 已写入错题，11-23 重测 |
| 2026-11-22 | 010 闭卷自测（5 题） | 4.5/5；index key 具体机制是缺口；事件系统已答对 | 已写入错题，11-23 重测 |
| 2026-11-22 | 011 项目自测（6 题） | 5.1/6；受控/非受控是缺口；useMemo 滥用已在 review 修正 | 已写入错题，11-23 重测 |
