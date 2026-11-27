import { createContext, useContext } from 'react'
import type { UserValue } from './types'

const UserContext = createContext<UserValue | null>(null)

const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('userContext is null')
  }
  return context
}

export { UserContext, useUserContext }
