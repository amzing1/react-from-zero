# Vue → React 对照手册

> 用法：每学一个主题就回来补充。**相似 ≠ 等价**，重点看“差异”一列。
>
> 版本：Vue 3（Composition API） / React 19.3

## 一、最根本的差异：更新模型

| 维度 | Vue 3 | React 19 |
|---|---|---|
| 依赖追踪 | Proxy 响应式，精确到属性 | 无自动追踪；setState 标记组件，重新执行组件函数 |
| 更新单位 | 响应式依赖 → 对应副作用/组件 | 状态所在组件及其子树重新 render，再 diff |
| 数据修改 | 可变修改，自动触发 | 不可变更新，替换引用 |
| 视图描述 | template，编译期优化 | JSX，运行时创建 element |
| 调度 | 微任务批量更新 | 并发调度 + Lane 优先级，可中断 |
| 性能直觉 | 少改数据 = 少更新 | 状态位置、组件边界、memo 决定重渲染范围 |

**一句话**：Vue 在“数据”层面做细粒度追踪；React 在“组件”层面做粗粒度重渲染，再用 diff 和调度优化。

**最重要的反直觉点**

1. `useState` 返回的是**某次渲染的快照**，不是永远最新的变量。
2. `useRef` 不是 Vue 的 `ref`：修改 `.current` **不会触发重新渲染**。
3. React 的 `setState` 不是“赋值”，而是**请求下一次渲染**；同一事件内的多次更新会批处理成一次 render。批处理决定“渲染几次”，快照决定“读到哪个值”。
4. Vue 的“可变更新”只对 `push` / `splice` 等**变异方法**自动生效；`filter` / `map` 返回新数组，仍需重新赋值。React 没有自动机制，**任何更新都要手动产生新引用**。

## 二、语法与 API 对照

| 能力 | Vue 3 | React 19 | 注意 |
|---|---|---|---|
| 组件定义 | SFC `<script setup>` | 函数组件 | React 组件就是函数 |
| 模板 | template | JSX | JSX 是表达式，不是字符串 |
| 条件渲染 | `v-if` / `v-else` | `cond && <A/>` / 三元 | 注意 `0 &&` 的坑 |
| 列表 | `v-for` | `array.map()` + key | key 必须稳定 |
| 双向绑定 | `v-model` | `value` + `onChange` | 单向数据流 |
| 事件 | `@click` | `onClick` | camelCase，传函数 |
| 事件修饰符 | `.stop` / `.prevent` | `e.stopPropagation()` / `e.preventDefault()` | 手动调用 |
| 子传父 | `emit` | callback prop | `onXxx` 命名约定 |
| 默认插槽 | `<slot />` | `children` | 组合思维 |
| 具名插槽 | `<slot name="x">` | 多个 props / 对象 children | 没有 slot 语法 |
| 作用域插槽 | `v-slot="props"` | render props / 函数 children | 函数作为子节点 |
| 依赖注入 | `provide/inject` | `createContext/useContext` | Context 变化影响消费者 |
| 全局状态 | Pinia / Vuex | Zustand / Redux Toolkit / Jotai | 生态不同，理念可迁移 |
| 路由 | Vue Router | React Router / TanStack Router | 都有数据路由能力 |
| 元框架 | Nuxt | Next.js / React Router framework | Next 16 为当前主线 |
| 异步组件 | `defineAsyncComponent` | `lazy` + `Suspense` | 需要加载态 |
| 传送门 | `<Teleport>` | `createPortal` | 用于 Modal/Tooltip |
| 缓存组件 | `<KeepAlive>` | `<Activity>`（19.2+） | 隐藏时 effect 会卸载 |
| 过渡动画 | `<Transition>` | `<ViewTransition>` / Motion / CSS | 19.3 稳定 ViewTransition |
| 自定义指令 | `v-xxx` | 自定义 Hook / ref / 组件 | 用组合表达行为 |
| 逻辑复用 | mixins（旧）/ composables | 自定义 Hook | Hook 只能在顶层调用 |
| 全局插件 | `app.use()` | Provider / 模块初始化 | 没有 app 实例概念 |
| 模板 ref | `ref="el"` | `useRef` + `ref={el}` | DOM 引用 |
| 暴露方法 | `defineExpose` | `useImperativeHandle` / ref-as-prop | React 19 可直接 ref |
| 响应式数据 | `ref` / `reactive` | `useState` / `useReducer` | 不可变更新 |
| 派生状态 | `computed` | 渲染期直接计算，必要时 `useMemo` | 不要默认 memo |
| 监听 | `watch` / `watchEffect` | `useEffect` / 事件回调 / `useEffectEvent` | Effect 不是 watch |
| 挂载 | `onMounted` | `useEffect(..., [])` / `useLayoutEffect` | 注意 StrictMode |
| 更新 | `onUpdated` | 无直接对应 | 通常不需要 |
| 卸载 | `onUnmounted` | Effect cleanup | 清理副作用 |
| DOM 更新后 | `nextTick` | `useLayoutEffect` / `useEffect` | 没有完全等价物 |
| 纯展示切换 | `v-show` | `hidden` / CSS / `<Activity>` | 是否保留状态 |
| 原始 HTML | `v-html` | `dangerouslySetInnerHTML` | 有 XSS 风险 |
| 错误捕获 | `onErrorCaptured` | Error Boundary | 类组件/库实现 |
| 异步边界 | `<Suspense>`（实验） | `<Suspense>` | React 中更核心 |
| 样式作用域 | `<style scoped>` | CSS Modules / Tailwind / CSS-in-JS | 生态选择更多 |

### Day 003 补充：组件接口的三个关键差异

1. **Context 的更新粒度**：`value={{ theme, toggleTheme }}` 每次 Provider 渲染都会创建新对象，`Object.is` 必然失败，**所有消费者重渲染**，不管它读了哪个字段。Vue 的 `provide/inject` 通常传递响应式值，由响应式系统按属性追踪。优化：拆分 Context、稳定 value（`useMemo`）、下移 Provider。
2. **挂载/卸载**：`{open && <Comp />}` ≈ `v-if`（真正卸载、cleanup、state 重置）；组件内提前 `return null` ≈ `v-show`（保留 state 和 Effect），但**必须写在所有 Hooks 之后**，否则违反 Hooks 调用顺序。React 的 Hooks 不能条件调用，Vue 的 composable 可以。
3. **render prop 与事件回调**：`renderActions={(user) => <Node />}` 是渲染期调用的函数，必须纯；`onEdit` 这类事件回调只能在事件/Effect 中调用，写成 `onClick={onEdit(user)}` 会在渲染期误触发。

> React 19 补充：`<Context value={...}>` 可以直接作为 Provider；`use(Context)` 允许条件调用，`useContext` 不允许。

### Day 018 补充：Pinia 与 reducer/Context 的细分映射

| Pinia | React（项目 B 的做法） | 关键差异 |
|---|---|---|
| `state` | `useReducer` 的 state + Provider | Pinia 可直接改；React 必须返回新对象/新数组 |
| `getters`（缓存 + 依赖追踪） | render 派生 / selector 纯函数 | React 默认每次 render 重算；需要缓存才上 `useMemo` |
| `actions`（可异步） | 事件处理 + `dispatch` | 异步在事件/action 内；reducer 始终同步纯函数 |
| 多模块 store | 多 Context（state / dispatch 拆分） | Context 按 value 引用通知，无字段级订阅 |
| `storeToRefs` | 无完全等价物 | 消费者读整个 Context value；要细粒度用 selector 型 store（Zustand） |
| 模块级单例 | Provider 树内作用域 | Context 可嵌套不同 Provider，天然多实例 |

一句判断：**需要跨组件共享、多个事件修改**的状态用 reducer + Context（或状态库）；只服务某个面板 UI 的筛选条件留在本地。

### Day 020 补充：watch / watchEffect 与 useEffect

| Vue | React | 关键差异 |
|---|---|---|
| `watch(source, cb)` | `useEffect(setup, deps)` | Vue 显式声明 source；React 手动列 deps，按 `Object.is` 比较 |
| `watchEffect(cb)` | 无直接等价 | Vue 自动收集依赖；React 必须手动列依赖 |
| `watch(..., { immediate: true })` | 默认挂载后执行 | React Effect 没有"非立即"模式 |
| watch 回调的 `onCleanup` | Effect cleanup | 下一次执行前调用 |
| `flush: 'post'` | `useEffect`（绘制后） | 大体对应；`flush: 'pre'` 无直接等价 |
| `onMounted` / `onUnmounted` | `useEffect(..., [])` + cleanup | React 用同一套机制 |
| 自动依赖追踪 | 手动依赖数组 | 引用变化也会触发 React Effect；Vue 按属性依赖触发 |

## 三、生命周期对照

| Vue | React | 说明 |
|---|---|---|
| `setup` | 函数组件体 | **render 阶段，必须纯**，不要发请求/改 DOM |
| `beforeCreate` / `created` | 函数组件体 | 初始化逻辑放在模块层或自定义 Hook |
| `beforeMount` | render | React 先 render 再 commit |
| `mounted` | `useEffect(..., [])` / `useLayoutEffect` | 依赖 DOM 测量用 layout effect |
| `beforeUpdate` | render | — |
| `updated` | `useEffect`（无依赖） | 很少需要；通常说明状态设计有问题 |
| `beforeUnmount` | Effect cleanup | 清理订阅、定时器、请求 |
| `unmounted` | Effect cleanup | — |
| `activated` / `deactivated` | `<Activity>` 隐藏/显示 | 隐藏时 effect 会卸载，状态保留 |
| `onErrorCaptured` | Error Boundary | 不能捕获事件回调和异步错误 |

**StrictMode 提醒**：开发环境会故意双调用 render 和 Effect（setup → cleanup → setup），用来暴露副作用问题。生产环境不会。

## 四、代码对照：计数器

```vue
<!-- Vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'
const count = ref(0)
const double = computed(() => count.value * 2)
</script>

<template>
  <button @click="count++">{{ count }} / {{ double }}</button>
</template>
```

```tsx
// React
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  const double = count * 2 // 渲染期派生，不需要 useMemo

  return (
    <button onClick={() => setCount(c => c + 1)}>
      {count} / {double}
    </button>
  )
}
```

## 五、代码对照：监听 vs Effect

```ts
// Vue：监听状态变化
watch(key, () => {
  localStorage.setItem('key', key)
})
```

```tsx
// React：同步外部系统
useEffect(() => {
  localStorage.setItem('key', key)
}, [key])
```

```tsx
// React：用户事件触发，不需要 Effect
function handleKeyChange(next: string) {
  setKey(next)
  localStorage.setItem('key', next)
}
```

**判断标准**：由用户交互直接引起 → 放事件处理；需要与外部系统保持同步 → 放 Effect。

## 六、常见错误类比（高频踩坑）

1. **把 `useRef` 当 Vue 的 `ref`**：改 `.current` 不会触发渲染，只适合存 DOM/定时器/可变值。
2. **直接修改 state**：`items.push(x)` 不会触发更新；用 `[...items, x]`、`map`、`filter`、`toSpliced`。
3. **把 `useEffect` 当 `watch`**：Effect 是“同步外部系统”，不是“监听 state 做派生”。派生优先在 render 中算。
4. **依赖数组乱写**：漏依赖导致闭包旧值；优先函数式更新、把逻辑移进 Effect、必要时 `useEffectEvent`。
5. **`computed` 一律换成 `useMemo`**：React 每次渲染直接算更简单；`useMemo` 是性能优化，不是语义。
6. **生命周期硬套**：React 没有精确的 `mounted/updated`；按“渲染 + 提交 + 同步”思考。
7. **index 作为 key**：列表重排/插入时状态错位；用稳定 id。
8. **Context 当 Pinia 用**：Context 值变化会让所有消费者重渲染；拆分 Context、下移 Provider、或换外部 store。
9. **双向绑定思维**：React 单向数据流，受控组件要显式 `onChange`。
10. **模板自动解包**：React 中 `ref` 不会自动 `.value`；`useState` 读的是快照。
11. **事件写法**：`onClick={handle}` 而不是 `onClick="handle()"`；事件对象是合成事件。
12. **样式作用域**：`scoped` 不会自动出现；用 CSS Modules/Tailwind/CSS-in-JS。
13. **条件调用 Hook**：Vue composable 可以在条件里调用，React Hook 不行；这来自 Hook 链表的实现方式。
14. **重渲染直觉**：Vue 精确更新依赖；React 默认重渲染整个组件子树，靠拆分、状态下移、memo/Compiler 优化。
15. **异步组件/路由**：React 需要 `lazy` + `Suspense`，或使用框架路由的懒加载。

## 七、建议的学习方式

1. 每学一个 React 概念，写一个 Vue/React 双实现，记录差异。
2. 先只用 React 原生能力（useState/useReducer/Context/Effect），不要过早引入 Zustand/useMemo。
3. 遇到“为什么和 Vue 不一样”时，回到更新模型：**依赖追踪 vs 组件重渲染**。
4. 把新发现的差异补充到本文件，形成自己的对照手册。
