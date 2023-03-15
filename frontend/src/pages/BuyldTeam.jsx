import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import PlayersOnPitch from '../components/PlayersOnPitch'

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
          <div className='relative w-[350px]  h-[600px]  mx-auto'>
            <Pitch />
            <div className=' absolute top-0 -left-0'>
              <PlayersOnPitch />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyldTeam
