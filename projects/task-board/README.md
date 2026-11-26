# 项目 B · 任务管理面板（上）

> 对应课时：018（上）· 024（下）· 047（状态库重构）
> 技术栈：Vite + React 19 + TypeScript（样式与测试后续补）

## 目标

用 `useReducer` + Context 完成带增删改查、组合筛选的任务面板，练习：

- 状态分区：任务数据 / 筛选 UI / 表单草稿 / 派生值各放哪里
- 判别联合 action 与不可变更新
- Context 拆分 state / dispatch，以及"只 dispatch 的组件不重渲染"
- 派生数据（过滤结果、计数、空状态）在 render 计算

## 运行

```bash
cd projects/task-board
pnpm install
pnpm dev
```

检查：

```bash
pnpm typecheck && pnpm lint && pnpm build
```

## 已实现（018）

- 新建任务：标题必填，描述 / 优先级 / 截止日期可选
- 编辑：标题、描述、优先级、截止日期；行内编辑，可取消
- 删除、状态前进（todo → doing → done，done 不可再前进）
- 组合筛选：关键词（标题 + 描述，忽略大小写）+ 状态 + 优先级；支持清除
- 统计：各状态数量 + 显示 X / 共 Y
- 两种空状态：无任务 / 筛选无结果

## 关键设计决策

| 状态 | 位置 | 理由 |
|---|---|---|
| `tasks` | `TaskProvider`（useReducer + Context） | 跨组件共享、多个事件修改、统一 action |
| `filter` | `TaskBoard` 本地 `useState` | 只服务面板 UI，离开即重置；放入 Context 会让每次输入都通知全体消费者 |
| 表单草稿 | `TaskForm` 本地 state | 编辑事务化：保存时一次提交，取消即丢弃 |
| 派生值 | render | 过滤结果、计数存 state 会与 `tasks` 不同步 |

- **Context 拆分**：`TaskContext`（tasks）+ `TaskDispatchContext`（dispatch 引用稳定）
- **Composer 实验**：`TaskLab` 组合 `<TaskProvider><TaskComposer /><TaskBoard /></TaskProvider>`；任务变化时 Provider 重渲染，但 `children` 元素引用稳定 + Composer 只订阅 dispatch，因此 Composer 不重渲染（控制台 `render task composer` 不打印）
- **Action**：
  - `CREATE_TASK` 携带完整 `task`（`id` / `createdAt` 在事件处理生成，reducer 保持纯）
  - `UPDATE_TASK` 使用 `changes: TaskPatch`，避免整个 action 展开进 task
  - 未命中 / done 再前进时返回原引用，避免无意义重渲染
- **表单**：新增与编辑共用 `TaskForm`（判别联合 props）；`useId` 生成 label/radio 的 id；提交 `preventDefault` + trim 校验 + `dueDate` 空串归一为 `null`

## 目录结构

```
src/
  features/task/
    types.ts               # 实体、过滤器、判别联合 action
    taskSelectors.ts       # selectVisibleTasks / countByStatus（纯函数）
    TaskContext.ts         # 两个 Context + reducer + useTasks / useTaskDispatch
    TaskProvider.tsx       # 拥有 useReducer，接收 children
    TaskComposer.tsx       # 只消费 dispatch 的创建入口（render 日志）
    TaskBoard.tsx          # 本地 filter，派生可见列表与计数
    TaskToolbar.tsx        # 搜索 + 状态 + 优先级 + 清除
    TaskList.tsx / TaskItem.tsx / TaskAction.tsx
    TaskForm.tsx           # add / edit 共用，受控草稿
    StatusSummary.tsx      # 状态计数 + 显示 X / 共 Y
    TaskLab.tsx            # 组合根
    data/seedTasks.ts
  App.tsx / main.tsx / index.css
```

## 验收清单

- [x] `pnpm typecheck` / `pnpm lint` / `pnpm build` 通过（2026-11-26）
- [x] 新建、编辑（含截止日期）、删除、状态前进均正确
- [x] 搜索 + 状态 + 优先级可组合；清除筛选恢复全部
- [x] 无任务 / 筛选无结果两种空状态正确
- [x] 编辑可取消，取消后任务不变
- [ ] 任务变化时 `render task composer` 不打印，`render task item` 打印（机制已实现，控制台可复看）
- [x] 控制台无 key 警告与 React 报错（代码检查通过）

## 已知问题与后续

- 024：localStorage 持久化、`useRef` 聚焦、自定义 Hook、ErrorBoundary / Suspense / lazy
- 047：迁移 Zustand / RTK，记录选型对比
- 028：补 Vitest + RTL，优先测 `taskSelectors` 与 reducer
- 样式：目前仅基础 `index.css`，后续用 CSS Modules 或 Tailwind（二选一）
- 数据为本地 seed，异步请求在 029 之后引入

## 迁移说明

- 代码由 `react-lab/src/components/day018/` 等价迁入，仅调整目录；两者如并存，请以本目录为准
