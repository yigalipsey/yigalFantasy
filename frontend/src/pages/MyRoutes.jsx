import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// pages & components

import Login from '../pages/Login'
import SignUp from './Signup'
import BuyldTeam from './BuyldTeam'
import UserTeamPage from './UserTeamPage'
import Leagues from './Leagues'
import LeagueTable from './LeagueTable'

const MyRoutes = () => {
  const { user } = useAuthContext()

  return (
    <div>
      <Routes>
        <Route
          path='/login'
          element={
            !user ? (
              <Login />
            ) : user && user.teamOfUser !== null ? (
              <Navigate to={'/myteam'} />
            ) : (
              <Navigate to={'/buyldteam'} />
            )
          }
        />
        <Route
          path='/signup'
          element={!user ? <SignUp /> : <Navigate to={'/buyldteam'} />}
        />
        <Route path='/myteam' element={<UserTeamPage />} />
        <Route path='/buyldteam' element={<BuyldTeam />} />
        <Route path='/leagues' element={<Leagues />} />
        <Route path='/league/:_id' element={<LeagueTable />} />
        <Route path='/team/:_id' element={<UserTeamPage />} />
      </Routes>
    </div>
  )
}

export default MyRoutes
