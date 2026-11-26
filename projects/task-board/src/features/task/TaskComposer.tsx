import { useState } from 'react'
import { useTaskDispatch } from './TaskContext'
import type { Task } from './types'
import TaskForm, { type TaskFormValues } from './TaskForm'

const TaskComposer = () => {
  const dispatch = useTaskDispatch()
  const [showForm, setShowForm] = useState(false)
  console.log('render task composer')

  const handleCreate = (values: TaskFormValues) => {
    const task: Task = {
      ...values,
      id: crypto.randomUUID(),
      status: 'todo',
      createdAt: new Date().toISOString(),
    }
    dispatch({ type: 'CREATE_TASK', task })
    setShowForm(false)
  }

  return (
    <div className="task-composer">
      {!showForm && <button onClick={() => setShowForm(true)}>新建任务</button>}
      {showForm && (
        <TaskForm
          type="add"
          onSubmit={handleCreate}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  )
}

export default TaskComposer
