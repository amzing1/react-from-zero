import { useUserContext } from './UserContext'

const UserBadge = () => {
  const context = useUserContext()

  return (
    <div>
      <p>isLogin: {context.isLogin ? 'true' : 'false'}</p>
      <p>name: {context.name}</p>
      {context.isLogin ? (
        <button onClick={context.logout}>logout</button>
      ) : (
        <button onClick={context.login}>login</button>
      )}
    </div>
  )
}

export default UserBadge
