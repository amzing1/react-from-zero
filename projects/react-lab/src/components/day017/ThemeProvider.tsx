import { useMemo, useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import type { Theme, ThemeValue } from './types'

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
