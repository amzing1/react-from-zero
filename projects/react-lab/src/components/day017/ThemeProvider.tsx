import { useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme, type ThemeValue } from './ThemeContext'

interface Props {
  children: ReactNode
}
const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light')

  const themeValue: ThemeValue = useMemo(
    () => ({
      theme,
      toggle: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  )
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
