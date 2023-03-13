import Pitch from '../components/SoccerPitch'
import PickPlayers from '../components/PickPlayers'
import { useState } from 'react'

const BuyldTeam = () => {
  const [t, setT] = useState(true)

  const change = () => {
    setT(!t)
    console.log(t)
  }

  if (t) return <button onClick={change}>select</button>
  else
    return (
      <>
        <div className=' flex w-5/6 m-auto '>
          <div className='w-full md:w-1/2'>
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
