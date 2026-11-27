import { createContext, useContext } from 'react'
import type { ThemeValue } from './types'


const ThemeContext = createContext<ThemeValue | null>(null)

const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('themeContext is null')
  }
  return context
}

export { ThemeContext, useThemeContext }
