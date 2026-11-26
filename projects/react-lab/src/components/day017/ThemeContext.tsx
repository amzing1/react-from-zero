import { createContext, useContext } from 'react'

type Theme = 'light' | 'dark'
type ThemeValue = {
  theme: Theme
  toggle: () => void
}
const ThemeContext = createContext<ThemeValue | null>(null)

const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('themeContext is null')
  }
  return context
}

export { ThemeContext, useThemeContext, type ThemeValue, type Theme }
