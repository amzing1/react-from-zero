import { createContext, useContext, type Dispatch } from 'react'
import type { Task, TaskAction, TaskReducer, TaskStatus } from './types'

const TaskContext = createContext<Task[] | null>(null)
const TaskDispatchContext = createContext<Dispatch<TaskAction> | null>(null)

function nextStatus(status: TaskStatus): TaskStatus {
  switch (status) {
    case 'todo':
      return 'doing'
    case 'doing':
    case 'done':
      return 'done'
  }
}

const taskReducer: TaskReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return [...state, action.task]
    case 'DELETE_TASK':
      return state.some((task) => task.id === action.id)
        ? state.filter((task) => task.id !== action.id)
        : state
    case 'UPDATE_TASK':
      return state.some((task) => task.id === action.id)
        ? state.map((task) =>
            task.id === action.id ? { ...task, ...action.changes } : task,
          )
        : state
    case 'ADVANCED_TASK': {
      const target = state.find((task) => task.id === action.id)
      if (!target || target.status === 'done') {
        return state
      }
      return state.map((task) =>
        task.id === action.id
          ? { ...task, status: nextStatus(task.status) }
          : task,
      )
    }
    default: {
      const exhaustive: never = action
      return exhaustive
    }
  }
}

function useTasks(): Task[] {
  const tasks = useContext(TaskContext)
  if (!tasks) {
    throw new Error('useTasks 必须在 TaskProvider 内使用')
  }
  return tasks
}

function useTaskDispatch(): Dispatch<TaskAction> {
  const dispatch = useContext(TaskDispatchContext)
  if (!dispatch) {
    throw new Error('useTaskDispatch 必须在 TaskProvider 内使用')
  }
  return dispatch
}

export {
  TaskContext,
  TaskDispatchContext,
  taskReducer,
  useTasks,
  useTaskDispatch,
}
