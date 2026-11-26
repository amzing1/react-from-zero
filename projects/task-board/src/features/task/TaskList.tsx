import TaskItem from './TaskItem'
import type { Task } from './types'

interface Props {
  list: Task[]
}

const TaskList = ({ list }: Props) => {
  return (
    <div className="task-list">
      {list.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
