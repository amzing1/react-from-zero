import { useTaskDispatchContext } from './TaskContent'

const TaskAddButton = () => {
  const taskDispatchContext = useTaskDispatchContext()
  console.log('render task add button')
  return (
    <div>
      <button
        onClick={() =>
          taskDispatchContext({
            type: 'ADD',
            id: crypto.randomUUID(),
            name: 'new Task',
          })
        }
      >
        add task
      </button>
    </div>
  )
}

export default TaskAddButton
