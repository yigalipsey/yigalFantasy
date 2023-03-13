import { useEffect, useState, useContext } from 'react'
import { LeagueContext } from '../context/LeagueContext'
import { useAuthContext } from '../hooks/useAuthContext'
import Pitch from '../components/SoccerPitch'

const BuyldTeam = () => {
  const [data, setData] = useState([])
  const { dispatch } = useContext(LeagueContext)
  const { user } = useAuthContext()

  useEffect(() => {
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
        console.log(data)
        setData(data)
        dispatch({ type: 'SET_DATA', payload: data })
      } catch (error) {
        console.error(error)
      }
    }

    fetchAllPlayers()
  }, [dispatch])

  return (
    <div className=' flex w-5/6 '>
      <div className=' w-1/5'>
        {data.map((team) => (
          <div className='' key={team._id}>
            <div>{team.players[0].name}</div>
            <h2 className=' bg-red-600 mt-1 '>{team.name}</h2>
          </div>
        ))}
      </div>
      <div className=' w-[450px] h-[600px] mt-10  '>
        <Pitch />
      </div>
    </div>
  )
}

export default BuyldTeam
