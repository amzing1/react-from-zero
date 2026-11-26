import ContextLab from './components/day017/task/ContextLab'
import ThemeCard from './components/day017/ThemeCard'
import ThemeProvider from './components/day017/ThemeProvider'
import UserBadge from './components/day017/UserBadge'
import UserProvider from './components/day017/UserProvider'

function App() {
  return (
    <div>
      <UserProvider>
        <ThemeProvider>
          <ThemeCard />
          <UserBadge />
        </ThemeProvider>
      </UserProvider>
      <ContextLab />
    </div>
  )
}

export default App
