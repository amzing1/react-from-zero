import { useRef } from "react"

const FocusLab = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  return <div>
    <input ref={(node) => {
      console.log()
      if (node) {
        inputRef.current = node
      }
      return () => {
        console.log('cleanup')
      }
    }} />
    <button onClick={() => inputRef.current?.focus()}>focus</button>
    <button onClick={() => inputRef.current?.select()}>select all</button>
    <button onClick={() => inputRef.current ? inputRef.current.value = '' : ''}>clear</button>
  </div>
}

export default FocusLab