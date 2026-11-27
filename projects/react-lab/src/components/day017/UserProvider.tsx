import { useMemo, useState, type ReactNode } from 'react'
import { UserContext } from './UserContext'
import type { User } from './types'

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    isLogin: true,
    name: 'wqh',
  })
  const userValue = useMemo(
    () => ({
      name: user.name,
      isLogin: user.isLogin,
      login: () =>
        setUser({
          isLogin: true,
          name: 'wqh',
        }),
      logout: () =>
        setUser({
          isLogin: false,
          name: '',
        }),
    }),
    [user],
  )
  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  )
}

export default UserProvider
