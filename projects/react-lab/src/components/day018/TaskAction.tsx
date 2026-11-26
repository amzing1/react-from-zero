import { useState } from 'react'
import { useTaskDispatch } from './TaskContext'
import TaskForm, { type TaskFormValues } from './TaskForm'
import type { Task } from './types'

interface Props {
  task: Task
}

const TaskAction = ({ task }: Props) => {
  const dispatch = useTaskDispatch()
  const [editing, setEditing] = useState(false)

  const handleUpdate = (values: TaskFormValues) => {
    dispatch({ type: 'UPDATE_TASK', id: task.id, changes: values })
    setEditing(false)
  }

  return (
    <div className="task-item__actions">
      <button
        disabled={task.status === 'done'}
        onClick={() => dispatch({ type: 'ADVANCED_TASK', id: task.id })}
      >
        前进
      </button>
      <button onClick={() => dispatch({ type: 'DELETE_TASK', id: task.id })}>
        删除
      </button>
      {!editing && <button onClick={() => setEditing(true)}>编辑</button>}
      {editing && (
        <TaskForm
          type="edit"
          task={task}
          onSubmit={handleUpdate}
          onCancel={() => setEditing(false)}
        />
      )}
    </div>
  )
}

export default TaskAction
