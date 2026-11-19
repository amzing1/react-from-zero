import { useState } from 'react'
import type { Todo } from '@/types'

const TodoDemo = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  console.log('[render] TodoDemo', todos)

  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      addTodo(text.trim())
    }
  }

  function addTodo(title: string) {
    if (title === '') {
      return
    }
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        done: false,
      },
    ])
    setText('')
  }

  function delTodo(id: string) {
    setTodos((prev) => prev.filter((v) => v.id !== id))
  }

  function addTwo(title: string) {
    addTodo(title)
    addTodo(title)
  }

  function toggleTodoDone(id: string) {
    setTodos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, done: !v.done } : v)),
    )
  }

  return (
    <>
      <div className="flex space-x-2">
        <input
          value={text}
          onKeyDown={(e) => handleKeydown(e)}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTodo(text.trim())}>+</button>
        <button onClick={() => addTwo(text.trim())}>add two</button>
      </div>
      {todos.map((v) => (
        <div key={v.id}>
          <span
            style={{ textDecoration: v.done ? 'line-through' : '' }}
            onClick={() => toggleTodoDone(v.id)}
          >
            {v.title}
          </span>
          <button onClick={() => delTodo(v.id)}>del</button>
        </div>
      ))}
    </>
  )
}

export default TodoDemo
