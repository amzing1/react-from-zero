import TaskBoard from './TaskBoard'
import TaskComposer from './TaskComposer'
import TaskProvider from './TaskProvider'

const TaskLab = () => {
  return (
    <div className="task-lab-day018">
      <TaskProvider>
        <TaskComposer />
        <TaskBoard />
      </TaskProvider>
    </div>
  )
}

export default TaskLab
