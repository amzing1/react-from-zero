import { useState } from 'react'

const expensiveInit = (id: number) => {
  console.log('expensive init', id)
  return id
}
const LazyInitDemo = () => {
  const [state, setState] = useState(expensiveInit(1))
  const [state2, setState2] = useState(() => expensiveInit(2))

  const handleClick = () => {
    setState((prev) => prev + 1)
    setState2((prev) => prev + 1)
  }

  return (
    <div>
      {state} = {state2}
      <button onClick={handleClick}>reRender</button>
    </div>
  )
}

export default LazyInitDemo
