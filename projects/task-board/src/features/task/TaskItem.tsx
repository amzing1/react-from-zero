import TaskAction from './TaskAction'
import type { Task } from './types'

interface Props {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  console.log('render task item')

  return (
    <article className="task-item">
      <h3 className="task-item__title">{task.title}</h3>
      <p className="task-item__desc">{task.desc || '（无描述）'}</p>
      <p className="task-item__meta">
        状态：{task.status} ｜ 优先级：{task.priority} ｜ 截止：
        {task.dueDate ?? '未设置'} ｜ 创建：{task.createdAt.slice(0, 10)}
      </p>
      <TaskAction task={task} />
    </article>
  )
}

export default TaskItem
