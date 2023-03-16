import React from 'react'
import Shirt from './shirt.svg'

const PlayerCaracter = ({ player, location }) => {
  return (
    <div className={` flex flex-col items-${location} m-2   `}>
      <div className='h-[50px]'>
        <img className={`w-[60px] `} src={Shirt} alt='My SVG' />
      </div>

      <div className=' absolute '>
        <h1 className={` text-gray-500 relative top-10`}>{player.name}</h1>
      </div>
    </div>
  )
}

export default PlayerCaracter
