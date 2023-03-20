import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import PlayersOnPitch from '../components/PlayersOnPitch'
import { useState } from 'react'

const BuyldTeam = () => {
  return (
    <>
      <div className='  md:pt-[50px] max-md:pt-4   '>
        <div className=' md:flex mt-10'>
          <div className='w-full order-2   '>
            <div className='max-md:mt-16'>
              <div className='relative w-[350px] h-[600px] mx-auto '>
                <Pitch />
                <div className=' absolute top-0 -left-0'>
                  <PlayersOnPitch />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full order-1 mt-10 max-md:mt-10    '>
            <div className=''>
              <PickPlayers />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyldTeam
