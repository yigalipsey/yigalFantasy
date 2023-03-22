import { useEffect, useContext } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCreateMyTeam } from '../hooks/useCreateMyTeam'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

//components
import DropDownByPosition from './DropDowns/DropDownByPosition'
import DropDownByTeam from './DropDowns/DropDownByTeam'
import PriceSlider from './PriceSlider'
import Inputs from './Inputs'
import SelectPlayerByFilter from './SelectPlayerByFilter'
import { useState } from 'react'

const PickPlayers = () => {
  const { user } = useAuthContext()
  const { createTeam } = useCreateMyTeam()
  const { fetchAllPlayers } = useFetchData()
  const { dispatch } = useMyTeamContext()

  useEffect(() => {
    fetchAllPlayers()
  }, [])

  const handleBuildTeam = async (e) => {
    await createTeam()
  }

  const handleResetTeam = () => {
    dispatch({ type: 'RESET_TEAM' })
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
        className='px-4 py-2 rounded-md  flex justify-between  bg-white
       w-full mt-1'
      >
        <button
          onClick={() => handleBuildTeam()}
          className='hover:bg-green-600 w-1/2 '
        >
          בנה קבוצה
        </button>
        <button
          onClick={() => handleResetTeam()}
          className='hover:bg-green-600 w-1/2'
        >
          אפס קבוצה
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
