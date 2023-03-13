import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useDataContext } from '../hooks/useDataContext'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import TeamDetails from '../components/TeamDetails'

const PickPlayers = () => {
  const { teams, dispatch } = useDataContext()
  const { user } = useAuthContext()
  const { fetchAllPlayers } = useFetchData()

  useEffect(() => {
    fetchAllPlayers()
  }, [])

  return (
    <div className=' w-1/5'>
      <div>
        {teams.map((item) => (
          <TeamDetails key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}

export default PickPlayers
