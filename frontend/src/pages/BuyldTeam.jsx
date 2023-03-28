import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import PlayersOnPitch from '../components/PlayersOnPitch'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState, useEffect } from 'react'

const BuyldTeam = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    console.log(user.teamOfUser)
  }, [])

  if (user.teamOfUser === null) {
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
  } else {
    return (
      <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[220px] w-1/2 bg-black gap-5 flex justify-center items-center flex-col '>
        לא ניתן לבנות יותר מקבוצה אחת
      </div>
    )
  }
}

export default BuyldTeam
