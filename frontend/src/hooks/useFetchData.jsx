import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useMyTeamContext } from './useMyTeamContext'
import { useLeaguesContext } from '../hooks/useLeaguesContext'

export const useFetchData = () => {
  const { dispatch } = useContext(DataContext)
  const { dispatchLeague } = useLeaguesContext()
  const { dispatch: dispatchUserTeam } = useMyTeamContext()
  const { user, email } = useAuthContext()

  //fetching all players for user  thata user could pick his own team
  const fetchAllPlayers = async () => {
    try {
      const response = await fetch('http://localhost:4000/team/allteams', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })
      const data = await response.json()
      // console.log(data)
      dispatch({ type: 'SET_DATA', payload: data })
    } catch (error) {
      console.error(error)
    }
  }

  // fetch all the teams created by the users for main league data
  const fetchAllUsersTeams = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/userteams/allusersteams',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      const data = await response.json()
      // console.log(data)
      dispatchLeague({ type: 'SET_MAIN_LEAGUE_DATA', payload: data })
    } catch (error) {
      console.error(error)
    }
  }

  // fetch specific user team
  const fetchUserTeam = async (email) => {
    console.log(email)
    const response = await fetch('http://localhost:4000/userteams/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userMail: email }),
    })
    const json = await response.json()
    console.log(json)
    if (response.ok) {
      // update the team context
      dispatchUserTeam({ type: 'SET_TEAM', payload: json })
    }
  }

  // fetch all the leagues  user in
  const fetchUserLeagues = async () => {
    // console.log(user.email)
    const response = await fetch('http://localhost:4000/league/findleagues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userMail: user.email }),
    })
    const json = await response.json()
    console.log(json)
    if (response.ok) {
      dispatchLeague({ type: 'SET_USER_LEAGUE_DATA', payload: json.leagues })
    }
  }

  // fetch specific leagues
  const fetchSpecificLeague = async (_id) => {
    // console.log(user.email)
    const response = await fetch(`http://localhost:4000/league/${_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const json = await response.json()
    console.log(json)
    // if (response.ok) {
    //   dispatchLeague({
    //     type: 'SET_SPECIFIC_LEAGUE_DATA',
    //     payload: json,
    //   })
    // }
  }

  return {
    fetchAllPlayers,
    fetchAllUsersTeams,
    fetchUserLeagues,
    fetchUserTeam,
    fetchSpecificLeague,
  }
}
