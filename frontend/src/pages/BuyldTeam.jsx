import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import { useState } from 'react'

const BuyldTeam = () => {
  return (
    <>
      <div className=' grid grid-cols-1 mym:grid-cols-2 gap-4 w-5/6 m-auto mt-6 '>
        <div className='w-full   '>
          <div className=' '>
            <PickPlayers />
          </div>
        </div>
        <div className='w-full '>
          <div className=' w-[400px] h-[600px]  mx-auto'>
            <Pitch />
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyldTeam
