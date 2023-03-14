import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useDataContext } from '../hooks/useDataContext'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import DropDownXi from './DropDowns/DropDownXi'
import DropDownByPosition from './DropDowns/DropDownByPosition'
import DropDownByTeam from './DropDowns/DropDownByTeam'
import NameInputs from './NamesInputs'
import SelectPlayerByFilter from './SelectPlayerByFilter'

const PickPlayers = () => {
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
        <SelectPlayerByFilter />
      </div>

      <div>
        <DropDownXi />
      </div>
      <div>
        <DropDownByPosition />
      </div>
      <div>
        <DropDownByTeam />
      </div>
    </div>
  )
}

export default PickPlayers
