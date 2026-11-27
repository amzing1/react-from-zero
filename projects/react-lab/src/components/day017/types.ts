type Theme = 'light' | 'dark'
type ThemeValue = {
  theme: Theme
  toggle: () => void
}
type User = {
  isLogin: boolean
  name: string
}
type UserValue = User & {
  login: () => void
  logout: () => void
}

export {
  type Theme,
  type ThemeValue,
  type User,
  type UserValue
}