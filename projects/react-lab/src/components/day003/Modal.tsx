import { type ReactNode, useEffect } from 'react'

interface ModalProps {
  onClose: () => void
  children: ReactNode
}
const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    console.log('mount')
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      console.log('unmount')
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div>
      {children}
      <button onClick={onClose}>close</button>
    </div>
  )
}

export default Modal
