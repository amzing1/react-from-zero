import { useTheme } from './theme-context'

const ThemeBadge = () => {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{theme}</button>
}

export default ThemeBadge
