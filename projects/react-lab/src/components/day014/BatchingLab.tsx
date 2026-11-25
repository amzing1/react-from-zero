import { useState } from 'react'
import { flushSync } from 'react-dom'

const BatchingLab = () => {
  const [count, setCount] = useState(0)

  console.log('render')

  const handleClickA = () => {
    setCount((c) => c + 1)
    setCount((c) => c + 1)
    setCount((c) => c + 1)
    setCount((c) => c + 1)
  }

  const handleClickB = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  const handleClickC = () => {
    flushSync(() => setCount((c) => c + 1))
    flushSync(() => setCount((c) => c + 1))
  }

  const handleClickD = () => {
    setTimeout(() => {
      setCount((c) => c + 1)
      setCount((c) => c + 1)
      Promise.resolve().then(() => {
        setCount((c) => c + 1)
        setCount((c) => c + 1)
      })
    }, 1000)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClickA}>a</button>
      <button onClick={handleClickB}>b</button>
      <button onClick={handleClickC}>c</button>
      <button onClick={handleClickD}>d</button>
    </div>
  )
}
export default BatchingLab
