import { useState } from 'react'

let renderCount = 0
const ImpureDemo = () => {
  renderCount++

  const [_, setState] = useState(0)

  return (
    <div>
      {renderCount}
      <button onClick={() => setState((prev) => prev + 1)}>reRender</button>
    </div>
  )
}

export default ImpureDemo
