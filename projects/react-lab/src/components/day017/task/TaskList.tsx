import { useTaskStateContext } from './TaskContent'

const TaskList = () => {
  const taskContext = useTaskStateContext()
  console.log('render task list')

  return (
    <div>
      {taskContext.map((v) => (
        <p key={v.id}>{v.name}</p>
      ))}
    </div>
  )
}

export default TaskList
