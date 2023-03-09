import './App.css'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import RoutesBeforeAuth from './pages/RoutesBeforeAuth'
import MyRoutes from './pages/MyRoutes'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()

  if (!user) {
    return (
      <div className=''>
        <RoutesBeforeAuth />
      </div>
    )
  }

  if (user) {
    return (
      <div className=''>
        <Navbar />
        <MyRoutes />
      </div>
    )
  }
}

export default App
