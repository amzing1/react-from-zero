import type { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
  footer?: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div>
      <header>{props.title}</header>
      {props.children}
      {props.footer != null ? props.footer : null}
    </div>
  )
}

export default Layout
