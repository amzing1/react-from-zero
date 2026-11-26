import { createContext, useContext } from 'react'

type User = {
  isLogin: boolean
  name: string
}
type UserValue = User & {
  login: () => void
  logout: () => void
}

const UserContext = createContext<UserValue | null>(null)

const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('userContext is null')
  }
  return context
}

export { UserContext, useUserContext, type User, type UserValue }
