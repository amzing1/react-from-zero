import { useEffect, useState } from 'react'

const ClosureLab = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // setCount(1)
      setCount((prev) => prev + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <div>count: {count}</div>
}

export default ClosureLab
