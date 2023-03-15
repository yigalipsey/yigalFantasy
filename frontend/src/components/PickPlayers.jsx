import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useAuthContext } from '../hooks/useAuthContext'

//components
import DropDownXi from './DropDowns/DropDownXi'
import DropDownByPosition from './DropDowns/DropDownByPosition'
import DropDownByTeam from './DropDowns/DropDownByTeam'
import PriceSlider from './PriceSlider'
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
        <DropDownXi />
      </div>

      <div className=' h-64 overflow-y-auto mt-5 '>
        <SelectPlayerByFilter />
      </div>

      <div>
        <PriceSlider />
      </div>
      <div className=' flex'>
        <DropDownByPosition />
        <DropDownByTeam />
      </div>
    </div>
  )
}

export default PickPlayers
