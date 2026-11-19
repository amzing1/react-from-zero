import { Activity, useState } from 'react'
import Counter from './components/day004/Counter'

function App() {
  const [mode, setMode] = useState<'hidden' | 'visible'>('visible')
  return (
    <div>
      <Activity mode={mode}>
        <Counter />
      </Activity>
      <button
        onClick={() =>
          setMode((prev) => (prev === 'visible' ? 'hidden' : 'visible'))
        }
      >
        toggle
      </button>
    </div>
  )
}

export default App
