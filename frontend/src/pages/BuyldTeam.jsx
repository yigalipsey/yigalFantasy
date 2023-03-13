import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import DropDownXi from '../components/DropDownXi'
import { useState } from 'react'

const BuyldTeam = () => {
  return (
    <>
      <div className=' flex w-5/6 m-auto '>
        <div className='w-full md:w-1/2'>
          <div>
            <DropDownXi />
          </div>
          <PickPlayers />
        </div>
        <div className='w-full md:w-1/2'>
          <div className=' w-[450px] h-[600px] mt-10  '>
            <Pitch />
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyldTeam
