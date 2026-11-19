import { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
    return () => {
      console.log('cleanup')
    }
  }, [count])
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  )
}

export default Counter
