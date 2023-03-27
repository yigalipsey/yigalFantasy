import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useMyTeamContext } from './useMyTeamContext'
import ErrorMsg from '../components/ErrorMsg'

export const useCreate = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user } = useAuthContext()
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
    console.log(json)
  }

  // create a new league
  const createLeague = async ({ name }) => {
    setIsLoading(true)
    console.log(user)
    const response = await fetch('http://localhost:4000/league/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        teams: user.teamOfUser,
        userMail: user.email,
      }),
    })
    const json = await response.json()
    console.log(json)
  }

  return { createTeam, error }
}
