import { useEffect, useMemo, useState } from "react"

const DepsLab = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const c = useMemo(() => ({
    value: 3
  }), [])

  const d = {
    value: 4
  }

  useEffect(() => {
    console.log('effect1')
  })
  useEffect(() => {
    console.log('effect2')
  }, [])
  useEffect(() => {
    console.log('effect3')
  }, [a])
  useEffect(() => {
    console.log('effect4')
  }, [c])
  useEffect(() => {
    console.log('effect5')
  }, [d])

  return <div>
    <p>{a}<button onClick={() => setA(prev => prev+1)}>add a</button></p>
    <p>{b}<button onClick={() => setB(prev => prev+1)}>add b</button></p>
  </div>
}

export default DepsLab