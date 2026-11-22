import type { ReactNode } from 'react'

interface Props {
  open: boolean
  title: string
  children: ReactNode
  footer?: ReactNode
  onClose: () => void
}

const Modal = (props: Props) => {
  return props.open ? (
    <div>
      <div>{props.title}</div>
      {props.children}
      {props.footer != null ? props.footer : null}
      <button onClick={props.onClose}>close</button>
    </div>
  ) : null
}

export default Modal
