import { createContext, useContext } from 'react'

type ThemeContextValue = { theme: 'light' | 'dark'; toggleTheme: () => void }
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return {
    theme: context.theme,
    toggleTheme: context.toggleTheme,
  }
}

export { ThemeContext, useTheme }
