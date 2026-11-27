import { useImperativeHandle, useRef, type Ref } from "react"

export type FancyInputHandle = {
  focus: () => void,
  clear: () => void
}
type Props = {
  ref: Ref<FancyInputHandle>
}
const FancyInput = ({ref}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current!.focus(),
    clear: () => {inputRef.current!.value = ''}
  }), [])

  return <div>
    <input ref={inputRef} />
  </div>
}

export default FancyInput