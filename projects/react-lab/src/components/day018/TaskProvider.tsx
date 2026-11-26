import { useReducer, type ReactNode } from 'react'
import { mockTasks } from './data/seedTasks'
import { TaskContext, TaskDispatchContext, taskReducer } from './TaskContext'

interface Props {
  children: ReactNode
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, mockTasks)

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

export default TaskProvider
