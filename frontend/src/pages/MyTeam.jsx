import { useEffect, useState, useContext } from 'react'
import { LeagueContext } from '../context/LeagueContext'
import { useAuthContext } from '../hooks/useAuthContext'

const MyTeam = () => {
  const [players, setPlayers] = useState([])
  const { dispatch } = useContext(LeagueContext)
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const payload = { name: 'league1' }
        const response = await fetch(
          'http://localhost:4000/league/allplayers',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify(payload),
          }
        )
        const data = await response.json()
        console.log(data[0].teams[0])
        setPlayers(data[0].teams[0].players)
        dispatch({ type: 'SET_PLAYERS', payload: data })
      } catch (error) {
        console.error(error)
      }
    }

    fetchAllPlayers()
  }, [dispatch])

  return (
    <div>
      {players.map((player) => (
        <div className=' w-2/5' key={player._id}>
          <h2 className=' bg-red-600 mt-1 '>{player.name}</h2>
          {/* <p>Position: {player.position}</p>
          <p>Team: {player.team}</p> */}
        </div>
      ))}
    </div>
  )
}

export default MyTeam
