import { useReducer, useState } from 'react'

type Status = 'todo' | 'doing' | 'done'

interface Task {
  id: string
  title: string
  status: Status
}

type Action =
  | { type: 'ADD'; title: string; id: string }
  | { type: 'REMOVE'; id: string }
  | { type: 'ADVANCE'; id: string }
  | { type: 'RESET' }
type Reducer = (state: Task[], action: Action) => Task[]
type Next = (status: Status) => Status

const next: Next = (status) => {
  switch (status) {
    case 'todo':
      return 'doing'
    case 'doing':
      return 'done'
    case 'done':
      return 'done'
  }
}
const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          status: 'todo',
        },
      ]
    case 'REMOVE':
      return state.filter((v) => v.id !== action.id)
    case 'RESET':
      return []
    case 'ADVANCE':
      return state.map((v) =>
        v.id === action.id ? { ...v, status: next(v.status) } : v,
      )
    default: {
      const _exhaustive: never = action
      return _exhaustive
    }
  }
}

const TaskReducerDemo = () => {
  const [title, setTitle] = useState('')
  const [tasks, dispatch] = useReducer(reducer, [])

  const todoCount = tasks.filter((v) => v.status === 'todo').length
  const doingCount = tasks.filter((v) => v.status === 'doing').length
  const doneCount = tasks.filter((v) => v.status === 'done').length

  const handleAddTask = () => {
    dispatch({
      id: crypto.randomUUID(),
      title: title.trim(),
      type: 'ADD',
    })
    setTitle('')
  }
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTask} disabled={title.trim() === ''}>
        add task
      </button>
      <div>
        {tasks.map((v) => (
          <div key={v.id}>
            {v.title} - {v.status} -{' '}
            <button
              disabled={v.status === 'done'}
              onClick={() => dispatch({ type: 'ADVANCE', id: v.id })}
            >
              前进
            </button>{' '}
            -{' '}
            <button onClick={() => dispatch({ type: 'REMOVE', id: v.id })}>
              删除
            </button>
          </div>
        ))}
      </div>
      <div>
        {todoCount} - {doingCount} - {doneCount}
        <button onClick={() => dispatch({ type: 'RESET' })}>清空</button>
      </div>
    </div>
  )
}

export default TaskReducerDemo
