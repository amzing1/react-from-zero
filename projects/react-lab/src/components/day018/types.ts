const TASK_STATUSES = ['todo', 'doing', 'done'] as const
const TASK_PRIORITIES = ['low', 'medium', 'high'] as const

type TaskStatus = (typeof TASK_STATUSES)[number]
type TaskPriority = (typeof TASK_PRIORITIES)[number]
type TaskDueDate = string | null

type Task = {
  id: string
  title: string
  desc: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: TaskDueDate
  createdAt: string
}

type TaskFilter = {
  keyword: string
  status: TaskStatus | 'all'
  priority: TaskPriority | 'all'
}

type TaskPatch = Pick<Task, 'title' | 'desc' | 'priority' | 'dueDate'>

type TaskAction =
  | { type: 'CREATE_TASK'; task: Task }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'UPDATE_TASK'; id: string; changes: TaskPatch }
  | { type: 'ADVANCED_TASK'; id: string }

type TaskReducer = (state: Task[], action: TaskAction) => Task[]

export {
  TASK_STATUSES,
  TASK_PRIORITIES,
  type TaskStatus,
  type TaskPriority,
  type TaskDueDate,
  type Task,
  type TaskAction,
  type TaskPatch,
  type TaskReducer,
  type TaskFilter,
}
