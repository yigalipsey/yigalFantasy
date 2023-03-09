import { useState, useEffect } from 'react'

const useFetchPlayers = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:4000/teams/allplayers')
        const data = await response.json()
        setPlayers(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPlayers()
  }, [])

  return players
}

export default useFetchPlayers
