import { useEffect, useState, useContext } from 'react'
import { useDataContext } from '../hooks/useDataContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useFetchData } from '../hooks/useFetchData'
import Pitch from '../components/SoccerPitch'

const BuyldTeam = () => {
  const [data, setData] = useState([])
  const { teams, dispatch } = useDataContext()
  const { user } = useAuthContext()
  const { fetchAllPlayers } = useFetchData()

  useEffect(() => {
    fetchAllPlayers()
  }, [])

  const team = teams[0]
  console.log(team)
  return (
    <div className=' flex w-5/6 '>
      <div className=' w-1/5'>
        {teams.map((team) => {
          return <h1>team</h1>
        })}
      </div>
      <div className=' w-[450px] h-[600px] mt-10  '>
        <Pitch />
      </div>
    </div>
  )
}

export default BuyldTeam
