import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// pages & components

import Login from '../pages/Login'
import SignUp from './Signup'
import BuyldTeam from './BuyldTeam'
import MyTeamPage from './MyTeamPage'

const MyRoutes = () => {
  const { user } = useAuthContext()

  return (
    <div>
      <Routes>
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to={'/myteam'} />}
        />
        <Route
          path='/signup'
          element={!user ? <SignUp /> : <Navigate to={'/myteam'} />}
        />
        <Route path='/myteam' element={<MyTeamPage />} />
        <Route path='/buyldteam' element={<BuyldTeam />} />
      </Routes>
    </div>
  )
}

export default MyRoutes
