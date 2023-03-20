import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import PlayersOnPitch from '../components/PlayersOnPitch'
import { useState } from 'react'

const BuyldTeam = () => {
  return (
    <>
      <div className=' md:flex mt-5   '>
        <div className='w-full order-2 '>
          <div>
            <div className='relative w-[350px]  h-[600px]  mx-auto'>
              <Pitch />
              <div className=' absolute top-0 -left-0'>
                <PlayersOnPitch />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full order-1 max-md:mt-10   '>
          <div className=''>
            <PickPlayers />
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyldTeam
