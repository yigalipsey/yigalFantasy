import './App.css'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import RoutesBeforeAuth from './pages/RoutesBeforeAuth'
import MyRoutes from './pages/MyRoutes'
import Navbar from './components/Navbar'

//image
import realStadium from './images/real-stadium.jpg'

function App() {
  const { user } = useAuthContext()

  if (!user) {
    return (
      <div
        style={{ backgroundImage: `url(${realStadium})` }}
        className='bg-cover'
      >
        <RoutesBeforeAuth />
      </div>
    )
  }

  return (
    <div
      style={{ backgroundImage: `url(${realStadium})` }}
      className='bg-cover min-h-screen'
    >
      <Navbar />
      <MyRoutes />
    </div>
  )

  return (
    <div className=''>
      <RoutesBeforeAuth />
      <Navbar />
      <MyRoutes />
    </div>
  )
}

export default App
