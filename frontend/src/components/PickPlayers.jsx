import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useDataContext } from '../hooks/useDataContext'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import SelectPlayerByPosition from '../components/SelectPlayerByPosition'
import DropDownXi from '../components/DropDownXi'
import NameInputs from './NamesInputs'
import SelectPlayerByTeam from './SelectPlayerByTeam'

const PickPlayers = () => {
  const { teams } = useDataContext()
  const { user } = useAuthContext()
  const { fetchAllPlayers } = useFetchData()

  useEffect(() => {
    fetchAllPlayers()
  }, [])

  return (
    <div className=''>
      <div className='flex'>
        <NameInputs />
      </div>

      <div className=' h-64 overflow-y-auto mt-5 '>
        <SelectPlayerByTeam />
      </div>

      <div>
        <DropDownXi />
      </div>
    </div>
  )
}

export default PickPlayers
