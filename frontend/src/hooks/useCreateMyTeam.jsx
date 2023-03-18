import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useMyTeamContext } from './useMyTeamContext'

export const useCreateMyTeam = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user } = useAuthContext()
  const { team, coachOfTeam, teamName } = useMyTeamContext()

  const createTeam = async () => {
    setIsLoading(true)
    setError(null)

    console.log(user)

    const response = await fetch('http://localhost:4000/myteam/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        team,
        teamName,
        coachOfTeam,
        userMail: user.email,
      }),
    })
    const json = await response.json()
    console.log(json)
  }

  return { createTeam }
}
