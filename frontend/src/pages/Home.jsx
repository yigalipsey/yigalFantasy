import React from 'react'
import { Link } from 'react-router-dom'
import playerImage from '../images/player-start.png'

const Home = () => {
  return (
    <div className='md:flex  md:items-center md:h-full gap-16 py10 min-h-screen bg-black '>
      <div className='  md:w-1/2'>
        <img className='' src={playerImage} alt='' />
      </div>

      <div className=' mt-2   md:w-1/2 '>
        <div
          className=' md:mb-7 lg:mb-10  md:h-32 
          w-5/6 mx-auto flex items-center justify-center '
        >
          <h1 className='font-RubikIso text-gradient-rainbow text-4xl text-white md:text-6xl lg:text-7xl md:h-1/2 mb-2  '>
            ליגת החלומות
          </h1>
        </div>
        <div className='mt-10'>
          <div className='p-6 w-5/6 mx-auto max-w-md space-y-5  bg-gradient-rainbow rounded-lg shadow-lg'>
            <div className='flex flex-col space-y-4'>
              <Link
                to='/login'
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
              >
                הכנס
              </Link>
              <Link
                to='/signup'
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
              >
                הרשם
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
