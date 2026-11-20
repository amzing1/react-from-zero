import { Activity, useState } from 'react'
import Counter from './components/day004/Counter'
import Demo from './components/Demo'

function App() {
  const [mode, setMode] = useState<'hidden' | 'visible'>('visible')
  return (
    <div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <Demo />
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
