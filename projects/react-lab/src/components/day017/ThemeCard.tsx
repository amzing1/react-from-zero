import { useThemeContext } from './ThemeContext'

const ThemeCard = () => {
  const themeContext = useThemeContext()

  return (
    <div>
      currentTheme: {themeContext.theme}
      <button onClick={themeContext.toggle}>toggle theme</button>
    </div>
  )
}
export default ThemeCard
