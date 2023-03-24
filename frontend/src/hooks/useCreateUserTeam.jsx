import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useMyTeamContext } from './useMyTeamContext'
import ErrorMsg from '../components/ErrorMsg'

export const useCreateUserTeam = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user } = useAuthContext()
  const { team, coachOfTeam, teamName, budget } = useMyTeamContext()

  const createTeam = async () => {
    setIsLoading(true)
    console.log(user)
    const response = await fetch('http://localhost:4000/myteam/create', {
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

  return { createTeam, error }
}
