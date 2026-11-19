import { useState, type ReactNode } from 'react'
import { ThemeContext } from './theme-context'

const ThemeProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
