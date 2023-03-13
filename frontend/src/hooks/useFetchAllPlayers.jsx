import { useState, useEffect, useContext } from 'react'
import { LeagueContext } from '../context/LeagueContext'

const useFetchAllPlayers = () => {
  const [players, setPlayers] = useState([])
  const { dispatch } = useContext(LeagueContext)

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(
          'http://localhost:4000/league/allplayers',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'league1',
            }),
          }
        )
        console.log(response)

        const data = await response.json()
        setPlayers(data)
        dispatch({ type: 'SET_PLAYERS', payload: data })
      } catch (error) {
        console.error(error)
      }
    }

    fetchAllPlayers()
  }, [dispatch])

  return players
}

export default useFetchAllPlayers
