import './App.css'
import { useAuthContext } from './hooks/useAuthContext'
import { useState } from 'react'

// pages & components
import RoutesBeforeAuth from './pages/RoutesBeforeAuth'
import MyRoutes from './pages/MyRoutes'
import Navbar from './components/Navbar'

//image
import realStadium from './images/real-stadium.jpg'

function App() {
  const { user } = useAuthContext()
  const [selectedPage, setSelectedPage] = useState('/myteam')

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
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <MyRoutes />
    </div>
  )
}

export default App
