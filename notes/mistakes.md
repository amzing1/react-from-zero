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
| 2026-11-20 | RSC 水合（回归） | RSC 无水合 | Server Component 永不 hydrate；RSC 中的 Client Component 照常 hydrate；RSC 与 SSR 正交可叠加 | Day 006 自测 Q5；Day 012 到期复习；Day 013 Q8 | 2026-11-25 | 已掌握（11-24，Q8 正确） |
| 2026-11-22 | JSX 编译与组件大小写 | `<div>` 是普通 DOM、`<Foo>` 转 `_jsx`，没答出第一个参数 | `<div>` → `_jsx('div', ...)` 字符串 tag；`<Foo>` → `_jsx(Foo, ...)` 变量引用；大小写是编译器判断 host/组件的信号 | Day 007 自测 Q2 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | Fragment 短语法 key | 认为短语法可以加 key | `<>...</>` 不能传 props；`<Fragment key={id}>` 可以 | Day 007 自测 Q4 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | Vite 依赖预构建归属 | 漏答预构建归谁 | 预构建是打包行为，Vite 8 归 Rolldown；Oxc 管单文件解析/转换/压缩 | Day 007 自测 Q6 | 2026-11-23 | 未复习 |
| 2026-11-22 | 受控 checkbox | `<input type="checkbox">` 用 `value` 表示勾选状态 | 勾选状态是 `checked`；`value` 是表单提交值；受控 = `checked` + `onChange` | Day 007 动手 review | 2026-11-23 | 已修正（代码） |
| 2026-11-22 | 可选 prop 哨兵 | 用 `footer !== null` 判断可选 prop；修正时又写成 `\|\|` 恒真 | 可选 prop 省略时是 `undefined`；用 `!= null` 或 `!== undefined`；`!=` 宽松相等同时覆盖 null/undefined | Day 007 动手 review | 2026-11-23 | 已修正（代码） |
| 2026-11-22 | 直接调用组件函数 | `{Header()}` 只是绕过了 reconcile 阶段 | 直接在父 render 里执行函数，不创建自己的 fiber；Header 的 Hooks 挂到父 fiber 的 hook 链表，导致顺序/数量错乱；必须写 `<Header />` | Day 008 自测 Q3 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | children 优化机制 | 只知道「静态 jsx」；复述成父组件自己 bailout | 外层传入的 children 元素引用稳定；父组件因自身 state 重渲染时，是 **children 子树** 可以 bailout，不是父组件；静态 JSX 提升是同一机制 | Day 008 自测 Q5 | 2026-11-23 | 部分掌握（11-22） |
| 2026-11-22 | Commit 子阶段 | 把浏览器绘制（draw）算作 commit 子阶段 | Commit 四子阶段：beforeMutation → mutation → layout → passive；绘制在 layout 与 passive 之间，由浏览器完成 | Day 009 自测 Q1 | 2026-11-23 | 已复述（11-22） |
| 2026-11-22 | 更新函数批处理 | 009 写 4、012 写 4、013 写 0（正确 1/3）；014 Q5 已答对 | 队列依次执行：0→1→2→3，结果 3；三次 `setN(n + 1)` 结果 1；初始 0 不是一次更新 | Day 009/012/013/014 自测 | 2026-11-25 | 已掌握（11-24） |
| 2026-11-22 | StrictMode 生产环境 | 只答了开发环境双调用，漏生产 | 生产：render 1 次、commit 1 次、挂载 Effect setup 一次；更新时 cleanup → setup | Day 009 自测 Q3 | 2026-11-23 | 未复习 |
| 2026-11-22 | 快照时点 | 认为 commit 完成后旧闭包就能读到新值 | 当前事件处理闭包永远读当次 render 的快照；新值出现在下一次 render 的闭包/JSX 中；setState 只排队 | Day 009 自测 Q4 | 2026-11-23 | 已纠正（11-22） |
| 2026-11-22 | index key 机制 | 只说「React 认为所有 DOM 可复用」，没答出「按位置匹配」；012 仍说「跳过 DOM 更新」；013 Q7 已答对 | index key 表示位置；重排时 key 0 仍匹配 key 0，React 照常 render/reconcile，复用位置 0 的 DOM/组件 state 给新数据；不是跳过更新 | Day 010 自测 Q1；Day 012 周测验 Q5；Day 013 Q7 | 2026-11-25 | 已掌握（11-24） |
| 2026-11-24 | Object.is 与 bailout | 说「比较前后状态是否一致」，没说出「同引用」 | `setItems(items)` 传同一引用；`Object.is(next, current)` 为 true → bailout，不重渲染 | Day 013 自测 Q2 | 2026-11-25 | 已复述（11-24） |
| 2026-11-24 | 嵌套不可变更新 | 只写展开，缺 `profile:` / `address:` 属性名，语法不合法 | 每层都写成 `key: { ...obj.key, ... }`；`{...user, profile: {...user.profile, address: {...user.profile.address, city}}}` | Day 013 自测 Q3 | 2026-11-25 | 已纠正（11-24） |
| 2026-11-24 | 条件挂载 vs 提前 return | 只答了 Hooks 原因，没答生命周期差异 | 条件挂载 = 卸载，state 丢失、Effect cleanup；提前 return = 仍挂载，Hooks 照常执行，state 保留，只是不渲染内容 | Day 013 自测 Q6 | 2026-11-25 | 部分掌握（11-24） |
| 2026-11-24 | 批处理范围 | 把 React 17 的事件处理也说成「不批处理」 | React 17 只在 React 事件处理里批处理；setTimeout/Promise/原生事件不批处理。React 18+ 全部自动批处理 | Day 014 自测 Q1 | 2026-11-25 | 已复述（11-24） |
| 2026-11-24 | flushSync 次数 | 以为 flushSync 固定 render 3 次 | flushSync 退出批处理，按 flush 批次 render：两次独立调用 2 次，三次 3 次；同一回调内仍可合并 | Day 014 自测 Q2 | 2026-11-25 | 已复述（11-24） |
| 2026-11-25 | 受控输入只写 value | 只说「DOM 和状态不同步」 | 只写 value 不给 onChange → 只读 + 开发警告；value 变 undefined/null → 受控/非受控切换警告 | Day 015 自测 Q2 | 2026-11-26 | 已复述（11-25） |
| 2026-11-25 | 文件输入非受控 | 忘记原因 | 浏览器安全限制：file input 的 value 只读，JS 不能设置选中文件；只能用 `e.target.files` / FormData | Day 015 自测 Q4 | 2026-11-26 | 已复述（11-25） |
| 2026-11-25 | v-model 修饰符 | `.lazy` 没答 | `.lazy` 相当于从 input 事件改成 change/失焦；React 用 `onBlur` 或手动控制；trim/number 手动处理 | Day 015 自测 Q5 | 2026-11-26 | 已复述（11-25） |
| 2026-11-25 | Vue provide/inject vs Context | 简化成「Vue 提供响应式数据」；11-26 第二次热身已答出「provide 本身不响应式、响应式来自 ref/reactive」，但 Context 按 Object.is 通知全体消费者仍未提 | Vue provide 可提供任意值，provide/inject 本身不产生响应式；响应式来自 ref/reactive 的追踪。React Context 按 Object.is 比较 value，变化时所有消费者重渲染，无字段级追踪 | Day 017 自测 Q6；Day 018/019 热身 | 2026-11-29 | 部分纠正（11-26） |
| 2026-11-22 | 事件委托位置 | 热身时说监听器挂在 fiber 节点上 | React 17+ 把监听器挂在 createRoot 的根容器 DOM 上；fiber 只是内部数据结构；事件沿 React 树模拟捕获/冒泡 | Day 010 热身 Q3 | 2026-11-23 | 已纠正（11-22） |
| 2026-11-22 | 受控 vs 非受控 | 认为不写 `value` 时重渲染会把值清空 | 非受控的输入值由 DOM 管；重渲染保留，卸载/重挂载才重置；真正的问题是 state 与 DOM 分叉，清除筛选无法清空输入框 | Day 011 自测 Q6 | 2026-11-23 | 部分掌握（11-22） |
| 2026-11-22 | useMemo 滥用 | 在 8 条数据的过滤上用 useMemo，且 selectedTags 每次新数组导致依赖必变 | 便宜计算直接算；useMemo 只在计算贵或需要引用稳定时用；React 19 不默认 memo | Day 011 项目 review | 2026-11-23 | 已修正（11-22） |
| 2026-11-25 | reducer 纯度与 StrictMode | 补测只说"不重渲染/多两条数据"，没说出同引用 bailout 与双调用目的 | reducer 返回同引用 → Object.is 相等 → bailout；StrictMode 开发环境故意双调用，让副作用翻倍暴露纯度问题 | Day 016 补测 Q1 | 2026-11-26 | 已复述（11-25） |
| 2026-11-25 | never 与状态机 | 把 never 当成"消灭不可能状态"的工具 | 消灭不可能状态靠互斥联合成员 + 数据随状态走；never 只做编译期穷尽检查 | Day 016 自测 Q4 / 补测 Q2 | 2026-11-26 | 已复述（11-25） |
| 2026-11-25 | dispatch 队列语义 | 以为 dispatch 立刻执行 reducer；认为执行次数固定；11-26 复测说两次 dispatch reducer 只执行 1 次 | dispatch 把 action 排队，下一次 render 按顺序处理（两个 action 概念上各处理一次）；eager 计算 / StrictMode 使调用次数不是 API 保证 | Day 016 补测 Q3；Day 018 热身 Q2 | 2026-11-29 | 部分掌握（11-26 复测：render 对、reducer 次数错） |
| 2026-11-25 | reducer 内生成随机 id | reducer 里调用 crypto.randomUUID() | 违反"同输入同输出"；StrictMode 双调用生成两个 id；id 在事件处理函数生成并随 action 传入 | Day 016 代码 review | 2026-11-26 | 已修正（11-25） |
| 2026-11-26 | 状态分区判据 | 用「变化频率」解释任务数据放 Context、筛选放本地 | 首要判据是共享范围 / 所有权：任务数据被多组件读写、多事件修改 → reducer + Context；筛选只服务面板 UI、离开即重置 → 本地；频率是次要因素 | Day 018 自测 Q1 | 2026-11-27 | 待复习 |
| 2026-11-26 | 「不订阅 Context」≠「不重渲染」 | 认为没订阅 Context 的 TaskItem 不会重渲染 | TaskBoard 订阅 tasks 后重渲染，TaskList / TaskItem 作为子组件被父级重渲染带动；Composer 不重渲染靠稳定 children + 稳定 dispatch | Day 018 自测 Q4 | 2026-11-27 | 待复习 |
| 2026-11-26 | Pinia actions 的映射 | 把 Pinia actions 直接等同于 dispatch | actions ≈ 事件处理 + dispatch；异步在事件 / action 内，reducer 始终同步纯函数；getters 有缓存，render 派生每次重算 | Day 018 自测 Q5 | 2026-11-27 | 待复习 |
| 2026-11-26 | 编辑草稿直接绑 store | 只答「每个 task 都要维护副本」，没说出两种坏结局 | 直接绑 task：① 输入即 mutate，违反不可变；② 每字符 dispatch，全局重渲染且无法取消。本地副本让编辑事务化：保存一次提交，取消即丢弃 | Day 018 自测 Q6 | 2026-11-27 | 待复习 |
| 2026-11-26 | render 期间读 ref | RefVsStateLab 在 JSX 中直接读 `countRef.current` 展示 | render 必须纯；ref 读写放事件 / Effect / callback；要展示时用 state 做快照，点击「读取 ref」再把值 setState | Day 019 review | 2026-11-27 | 待修正 |
| 2026-11-26 | ref callback cleanup | FocusLab 返回 cleanup 但没把 object ref 置 null；attach 日志为空 | React 19 返回 cleanup 后卸载不再传 null；cleanup 里应手动清空存储的 ref；日志打印 node 才能观察 setup → cleanup → setup | Day 019 review | 2026-11-27 | 待修正 |
| 2026-11-26 | useRef 参数求值 | 答「一个执行函数，一个放函数地址」，没说清 useRef 实参每次 render 都会求值 | useState 的函数参数是惰性初始化器，只在挂载时调用（StrictMode 双调用）；useRef 没有该重载，参数表达式每次 render 先执行，只保留首次结果 | Day 019 检查点 | 2026-11-27 | 待复习 |

## 高频错误清单

### 状态与渲染

| 错误 | 正确理解 | 状态 |
|---|---|---|
| index key 重排 | 按位置复用同一 DOM/state，不是跳过更新 | 已掌握（11-24） |
| 三次 updater | 0→1→2→3；初始 0 不算一次更新 | 已掌握（11-24） |
| 非受控输入 | 值由 DOM 管；重渲染保留，卸载重挂载才重置 | 已纠正（11-23） |
| 嵌套更新 | 每层都要 `key: { ...obj.key }` | 已纠正（11-24） |
| 批处理范围 | React 17 只在 React 事件里批；18+ 扩到异步/原生 | 已复述（11-24） |
| flushSync 次数 | 按 flush 批次，不是 setState 数量 | 已复述（11-24） |
| 受控只写 value | 只读 + 开发警告；undefined 触发切换警告 | 已复述（11-25） |
| 文件输入 | 只能非受控；value 只读，用 files/FormData | 已复述（11-25） |
| v-model .lazy | onBlur / change 时机；React 无修饰符 | 已复述（11-25） |
| Context 内联 value | 每次 render 新对象 → 所有消费者重渲染 | 已掌握（11-25） |
| memo 挡 context | 不能；context 是独立订阅 | 已掌握（11-25） |
| state/dispatch 拆分 | dispatch 稳定，只 dispatch 的组件不重渲染 | 已掌握（11-25） |
| 状态分区判据 | 共享范围 / 所有权优先；频率是次要因素 | 待复习（11-26） |
| 不订阅 Context ≠ 不重渲染 | 父级重渲染带动子树；跳过需稳定元素 / memo | 待复习（11-26） |
| 编辑草稿 | 本地副本；保存提交、取消丢弃 | 待复习（11-26） |
| Pinia actions | ≈ 事件处理 + dispatch；异步不进 reducer | 待复习（11-26） |
| render 读 ref | 不纯；展示走 state 快照 | 待修正（11-26） |
| useRef 参数 | 每次 render 求值；惰性初始化用 useState | 待复习（11-26） |

### Hooks 与 Effect

| 错误 | 正确理解 | 状态 |
|---|---|---|
| 直接调用组件函数 | Hooks 挂到父 fiber，顺序错乱；必须 `<Header />` | 已掌握（11-23） |
| 条件挂载 vs 提前 return | 挂载/卸载 vs 保持挂载；state 与 Effect 行为不同 | 部分掌握（11-24） |
| reducer 内的随机/时间戳 | 不纯；id/时间戳在事件处理生成，action 携带 | 已修正（11-25） |
| never 的职责 | 只做编译期穷尽检查；消灭不可能状态靠互斥联合成员 | 已复述（11-25） |

### 并发与 React 19

| 错误 | 正确理解 | 状态 |
|---|---|---|
| RSC 无水合 | Server Component 不 hydrate；Client Component 照常 hydrate | 已掌握（11-24） |
| StrictMode 生产也双调用 | 生产不双调用，只有开发双调用 | 已掌握（11-23） |

### 生态与工程化

| 错误 | 正确理解 | 状态 |
|---|---|---|
| Vite 预构建归 Oxc | 预构建归 Rolldown；Oxc 管单文件解析/转换/压缩 | 已掌握（11-23） |
| 把 useMemo 当 computed | 便宜计算直接算；useMemo 只在贵或引用稳定时用 | 已修正（11-23） |

### 底层原理

| 错误 | 正确理解 | 状态 |
|---|---|---|
| 浏览器绘制算 commit 子阶段 | 四子阶段：beforeMutation → mutation → layout → passive，绘制不在其中 | 已掌握（11-23） |

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
| 2026-11-23 | 012 周复盘：到期复习 + 周测验（6 题） | 到期 2.7/3；周测验 4.9/6；更新函数 1/4 复发、index key 表述不准、RSC 水合不完整 | 已写入错题，11-24 重测 |
| 2026-11-24 | 013 自测（5 题）+ 11-24 到期复习（3 题） | 013 3.4/5；到期 2.6/3；Q3 嵌套语法、Q4 队列、Q6 生命周期是缺口；补测 Q2/Q3/Q4 正确 | 已写入错题，11-25 重测 Q6/队列 |
| 2026-11-24 | 014 自测（5 题） | 3.9/5；批处理范围、flushSync 次数是缺口；复述后通过 | 已写入错题，11-25 重测 |
| 2026-11-25 | 015 自测（6 题） | 3.5/6；只写 value、控件细节、文件输入、.lazy 是缺口；补测通过 | 已写入错题，11-26 重测 |
| 2026-11-25 | 017 自测（6 题） | 5.6/6；Context 定位/重渲染/优化/memo/state-dispatch 全对；Vue provide/inject 对比需补 | 已写入错题，11-26 复习 |
| 2026-11-26 | 018 自测（6 题）+ 11-26 到期热身 | 自测 4.4/6；Q1 判据、Q4 重渲染机制、Q5 actions 映射、Q6 编辑草稿是缺口；热身 3.3/5（Q2 reducer 次数、Q1 Vue 对比仍不完整） | 已写入错题，11-27 重测 Q1/Q4/Q5/Q6；017 Q1 11-29 再测 |
| 2026-11-26 | 019 热身 + 检查点 + 前三个 demo review | 热身 3.8/5；检查点 state/ref/变量 4/4，useRef 求值时机 0.6；review 发现 render 读 ref、cleanup 未置 null | 已写入错题；019 暂停，下次先修 |
