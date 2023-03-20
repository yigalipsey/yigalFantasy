import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCreateMyTeam } from '../hooks/useCreateMyTeam'

//components
import DropDownByPosition from './DropDowns/DropDownByPosition'
import DropDownByTeam from './DropDowns/DropDownByTeam'
import PriceSlider from './PriceSlider'
import Inputs from './Inputs'
import SelectPlayerByFilter from './SelectPlayerByFilter'

const PickPlayers = () => {
  const { createTeam } = useCreateMyTeam()
  const { user } = useAuthContext()
  const { fetchAllPlayers } = useFetchData()

  useEffect(() => {
    fetchAllPlayers()
  }, [])

  const handleClick = async (e) => {
    await createTeam()
  }

  return (
    <div className=' w-5/6 md:w-4/6 mx-auto '>
      <div className='flex w-full'>
        <Inputs />
      </div>

      <div className=' h-64 overflow-y-auto mt-5 '>
        <SelectPlayerByFilter />
      </div>

      <div>
        <PriceSlider />
      </div>
      <div
        className='px-4 py-2 rounded-md   bg-white
       w-full mt-1'
      >
        <button onClick={() => handleClick()} className=''>
          בנה קבוצה
        </button>
      </div>
      <div className='flex mt-2 pb-96'>
        <DropDownByPosition />
        <DropDownByTeam />
      </div>
    </div>
  )
}

export default PickPlayers
