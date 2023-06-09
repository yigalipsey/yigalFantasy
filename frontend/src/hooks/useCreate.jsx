import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useMyTeamContext } from './useMyTeamContext'
import { useLeaguesContext } from './useLeaguesContext'

export const useCreate = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { user, dispatch } = useAuthContext()
  const { dispatchLeague } = useLeaguesContext()
  const { team, coachOfTeam, teamName, budget } = useMyTeamContext()

  //create a new team of user
  const createTeam = async () => {
    setIsLoading(true)
    console.log('created')
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/userteams/create`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          team,
          teamName,
          coachOfTeam,
          budget,
          userMail: user.email,
        }),
      }
    )
    const json = await response.json()

    //update local storage that user has created team
    const userLocal = JSON.parse(localStorage.getItem('user'))
    userLocal.teamOfUser = json._id
    localStorage.setItem('user', JSON.stringify(userLocal))
  }

  // create a new league
  const createLeague = async ({ leagueName }) => {
    setIsLoading(true)
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/league/create`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leagueName,
          userMail: user.email,
        }),
      }
    )
    const json = await response.json()
    if (response.ok) {
      console.log(json)
    }
    dispatchLeague({ type: 'ADD_LEAGUE_ID', payload: json._id })
    console.log(json)
  }

  // join to league
  const JoinLeagueFunction = async ({ leagueId }) => {
    console.log(leagueId)
    setIsLoading(true)

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/league/join`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leagueId: leagueId,
          userMail: user.email,
        }),
      }
    )
    const json = await response.json()
    console.log(json)
  }

  return { createTeam, createLeague, JoinLeagueFunction, error }
}
