import { useEffect, useState } from 'react'

const RaceLab = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    let ignore = false
    const req = async (time: number) => {
      const res = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(`time:${time}`)
        }, time)
      })
      if (!ignore) {
        setText(res)
      }
    }
    req(count * 1000)

    return () => {
      ignore = true
    }
  }, [count])

  return <div>
    <p>count: {count}</p>
    <p>text: {text}</p>
    <button onClick={() => setCount(3)}>slow</button>
    <button onClick={() => setCount(1)}>fast</button>
  </div>
}

export default RaceLab
