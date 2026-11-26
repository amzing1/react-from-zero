import { createContext, useContext, type Dispatch } from 'react'

interface Task {
  id: string
  name: string
  isDone: boolean
}
type TaskAction =
  | {
      type: 'ADD'
      name: string
      id: string
    }
  | {
      type: 'DONE'
      id: string
    }
type TaskReducer = (state: Task[], action: TaskAction) => Task[]

const taskReducer: TaskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          isDone: false,
        },
      ]
    }
    case 'DONE': {
      return state.map((v) => (v.id === action.id ? { ...v, isDone: true } : v))
    }
  }
}
const TaskStateContext = createContext<Task[] | null>(null)
const TaskDispatchContext = createContext<Dispatch<TaskAction> | null>(null)

const useTaskStateContext = () => {
  const context = useContext(TaskStateContext)
  if (!context) {
    throw new Error('task state context is null')
  }
  return context
}

const useTaskDispatchContext = () => {
  const context = useContext(TaskDispatchContext)
  if (!context) {
    throw new Error('task state context is null')
  }
  return context
}

export {
  taskReducer,
  TaskStateContext,
  TaskDispatchContext,
  useTaskDispatchContext,
  useTaskStateContext,
  type Task,
  type TaskAction,
  type TaskReducer,
}
