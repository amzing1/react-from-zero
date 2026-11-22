import { useState } from 'react'

const SnapshotDemo = () => {
  const [n, setN] = useState(0)

  console.log('render n', n)

  function handleButton1() {
    setN(n + 1)
    console.log('after setN', n)
  }

  function handleButton2() {
    setN(n + 1)
    setN(n + 1)
    setN(n + 1)
  }

  function handleButton3() {
    setN((x) => x + 1)
    setN((x) => x + 1)
    setN((x) => x + 1)
  }

  return (
    <div>
      {n}
      <button onClick={handleButton1}>button1</button>
      <button onClick={handleButton2}>button2</button>
      <button onClick={handleButton3}>button3</button>
    </div>
  )
}

export default SnapshotDemo
