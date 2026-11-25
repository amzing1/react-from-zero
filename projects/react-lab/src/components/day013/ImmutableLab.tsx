import { useState } from 'react'

const ImmutableLab = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [user, setUser] = useState({
    profile: {
      address: {
        city: 'shanghai',
      },
    },
  })

  const handleTodo1 = () => {
    todos.push('todo1')
    setTodos(todos)
  }

  const handleTodo2 = () => {
    setTodos([...todos, 'todo2'])
  }

  return (
    <div>
      {todos.map((v) => (
        <p key={v}>{v}</p>
      ))}
      {user.profile.address.city}
      <button onClick={handleTodo1}>add todo1</button>
      <button onClick={handleTodo2}>add todo2</button>
      <button
        onClick={() =>
          setUser((prev) => ({
            ...prev,
            profile: {
              ...prev.profile,
              address: { ...prev.profile.address, city: 'beijing' },
            },
          }))
        }
      >
        to beijing
      </button>
    </div>
  )
}

export default ImmutableLab
