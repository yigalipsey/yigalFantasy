import { useEffect, useState, useContext } from 'react'
import { LeagueContext } from '../context/LeagueContext'
import { useAuthContext } from '../hooks/useAuthContext'

export const useFetchData = () => {
  const [data, setData] = useState([])
  const { dispatch } = useContext(LeagueContext)
  const { user } = useAuthContext()

  const fetchAllPlayers = async () => {
    try {
      const payload = { name: 'league1' }
      const response = await fetch('http://localhost:4000/team/allteams', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })
      const data = await response.json()
      // console.log(data)
      setData(data)
      dispatch({ type: 'SET_DATA', payload: data })
    } catch (error) {
      console.error(error)
    }
  }

  return { fetchAllPlayers }
}
