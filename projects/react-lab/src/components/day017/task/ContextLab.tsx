import TaskAddButton from './TaskAddButton'
import TaskList from './TaskList'
import TaskProvider from './TaskProvider'

const ContextLab = () => {
  return (
    <TaskProvider>
      <TaskList />
      <TaskAddButton />
    </TaskProvider>
  )
}

export default ContextLab
