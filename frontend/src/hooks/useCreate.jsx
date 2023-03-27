import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useMyTeamContext } from './useMyTeamContext'
import ErrorMsg from '../components/ErrorMsg'

export const useCreate = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user, teamOfUser, dispatch } = useAuthContext()
  const { team, coachOfTeam, teamName, budget } = useMyTeamContext()

  //create a new team of user
  const createTeam = async () => {
    setIsLoading(true)
    console.log(user)
    const response = await fetch('http://localhost:4000/userteams/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        team,
        teamName,
        coachOfTeam,
        budget,
        userMail: user.email,
      }),
    })
    const json = await response.json()
    dispatch({ type: 'SET_USER_TEAM', payload: json._id })
    console.log('id' + ' ' + json._id)
  }

  // create a new league
  const createLeague = async ({ leagueName }) => {
    setIsLoading(true)
    console.log(teamOfUser)
    const response = await fetch('http://localhost:4000/league/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: leagueName,
        teams: teamOfUser,
        userMail: user.email,
      }),
    })
    const json = await response.json()
  }

  return { createTeam, createLeague, error }
}
