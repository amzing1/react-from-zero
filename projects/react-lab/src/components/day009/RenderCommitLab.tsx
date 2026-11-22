import { useEffect, useLayoutEffect, useState, type ReactNode } from 'react'

const Parent = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0)

  console.log('[render parent]', count)

  useLayoutEffect(() => {
    console.log('[layout parent] ...')
    return () => {
      console.log('[layout parent cleanup] ...')
    }
  }, [count])
  useEffect(() => {
    console.log('[effect parent] ...')
    return () => {
      console.log('[effect parent cleanup] ...')
    }
  }, [count])

  return (
    <div>
      parent: {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {children}
    </div>
  )
}

const Child = () => {
  const [count, setCount] = useState(0)

  console.log('[render Child]', count)

  useLayoutEffect(() => {
    console.log('[layout Child] ...')
    return () => {
      console.log('[layout Child cleanup] ...')
    }
  }, [count])
  useEffect(() => {
    console.log('[effect Child] ...')
    return () => {
      console.log('[effect Child cleanup] ...')
    }
  }, [count])

  return (
    <div>
      Child: {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  )
}

const RenderCommitLab = () => {
  return (
    <Parent>
      <Child />
    </Parent>
  )
}

export default RenderCommitLab
