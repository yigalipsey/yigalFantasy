import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLeaguesContext } from '../hooks/useLeaguesContext'

export const useFetchData = () => {
  const { dispatch } = useContext(DataContext)
  const { dispatchLeague } = useLeaguesContext()
  const { user } = useAuthContext()

  //fetching all players for  user could pick his own team
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

  return { fetchAllPlayers, fetchAllUsersTeams }
}
