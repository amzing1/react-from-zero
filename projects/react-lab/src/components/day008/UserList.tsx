import { Fragment, type ReactNode } from 'react'

interface Props {
  users: { id: string; name: string }[]
  renderItem: (user: { id: string; name: string }) => ReactNode
}

const UserList = ({ users, renderItem }: Props) => {
  return users.map((v) => <Fragment key={v.id}>{renderItem(v)}</Fragment>)
}

export default UserList
