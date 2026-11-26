import { useRef, useState } from 'react'

const RefVsStateLab = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  return (
    <div>
      <p>count: {count}</p>
      <p>countRef: {countRef.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>add count</button>
      <button onClick={() => countRef.current += 1}>add countRef</button>
    </div>
  )
}

export default RefVsStateLab
