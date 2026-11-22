interface Props {
  users: {
    id: string
    name: string
    online: boolean
  }[]
}

const UserList = (props: Props) => {
  return props.users.length ? (
    props.users.map((v) => (
      <div key={v.id}>
        {v.name} - {v.online ? '在线' : '离线'}
      </div>
    ))
  ) : (
    <div>还没有好友</div>
  )
}

export default UserList
