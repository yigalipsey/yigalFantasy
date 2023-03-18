import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import PlayersOnPitch from '../components/PlayersOnPitch'
import { useCreateMyTeam } from '../hooks/useCreateMyTeam'
import { useState } from 'react'

const BuyldTeam = () => {
  const { createTeam } = useCreateMyTeam()

  const handleClick = async (e) => {
    await createTeam()
  }

  return (
    <>
      <div className=' grid grid-cols-1 mym:grid-cols-2 gap-4 w-full md:w-5/6 m-auto mt-6 '>
        <div className='w-full order-1 md:order-2 mx-auto '>
          <div className='  '>
            <PickPlayers />
            <button
              onClick={() => handleClick()}
              className=' h-4 bg-green-600 rounded-sm'
            >
              בנה קבוצה
            </button>
          </div>
        </div>
        <div className='w-full'>
          <div>
            <div className='relative w-[350px]  h-[600px]  mx-auto'>
              <Pitch />
              <div className=' absolute top-0 -left-0'>
                <PlayersOnPitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyldTeam
