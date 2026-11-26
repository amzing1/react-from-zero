import TaskItem from "./TaskItem"
import type { Task } from "./types"

interface Props {
  list: Task[]
}
const TaskList = ({list}: Props) => {
  return <div className="task-list">
    {list.map((v) => <TaskItem key={v.id} task={v} />)}
  </div>
}

export default TaskList