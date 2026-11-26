import { useReducer, type ReactNode } from 'react'
import {
  TaskDispatchContext,
  taskReducer,
  TaskStateContext,
} from './TaskContent'

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  return (
    <TaskStateContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  )
}

export default TaskProvider
