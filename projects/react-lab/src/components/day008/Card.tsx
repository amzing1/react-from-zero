import type { ReactNode } from 'react'

interface Props {
  title?: string
  children: ReactNode
  footer?: ReactNode
  actions?: ReactNode
}

const Card = ({ title = 'title', children, footer, actions }: Props) => {
  return (
    <div>
      <header>{title}</header>
      {children}
      {actions != null ? actions : null}
      {footer != null ? footer : null}
    </div>
  )
}

export default Card
