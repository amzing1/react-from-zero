import { useRef } from "react"
import FancyInput, { type FancyInputHandle } from "./FancyInput"

const ImperativeLab = () => {
  const fancyInputRef = useRef<FancyInputHandle | null>(null)
  return <div>
    <FancyInput ref={fancyInputRef} />
    <button onClick={() => fancyInputRef.current?.focus()}>focus</button>
    <button onClick={() => fancyInputRef.current?.clear()}>clear</button>

  </div>
}

export default ImperativeLab