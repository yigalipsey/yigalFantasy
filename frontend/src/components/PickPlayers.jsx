import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useDataContext } from '../hooks/useDataContext'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import TeamDetails from '../components/TeamDetails'

const PickPlayers = () => {
  const { teams } = useDataContext()
  const { user } = useAuthContext()
  const { fetchAllPlayers } = useFetchData()

  useEffect(() => {
    fetchAllPlayers()
  }, [])

  return (
    <div className=''>
      <div>
        {teams.map((item) => (
          <TeamDetails key={item._id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default PickPlayers
