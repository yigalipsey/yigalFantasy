import React from 'react'
import Shirt from './shirt.svg'

const PlayerCaracter = ({ player, location }) => {
  return (
    <div
      className={` flex flex-col  m-x-2  ${
        location === 'end'
          ? 'items-end'
          : location === 'center' && 'items-center'
      }  `}
    >
      <div className='h-[50px]'>
        <img className={`w-[60px] `} src={Shirt} alt='My SVG' />
      </div>

      <div className='w-full '>
        <h1
          className={` text-gray-500  flex flex-col  m-2  ${
            location === 'end'
              ? 'items-end'
              : location === 'center' && 'items-center'
          }`}
        >
          {player.name}
        </h1>
      </div>
    </div>
  )
}

export default PlayerCaracter
