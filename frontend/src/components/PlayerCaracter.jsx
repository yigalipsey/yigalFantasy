import React from 'react'
import Shirt from './shirt.svg'
import beitarImage from '../images/beitar.png'
import maccabiImage from '../images/maccabi.png'
import haifaImage from '../images/haifa.png'

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
        <img
          className={`w-[60px] `}
          src={` ${
            player.team === '6410b1ad7e98290ae55a6d0c'
              ? maccabiImage
              : player.team === '640f50c18ffcde7ede293ffa'
              ? haifaImage
              : player.team === '640f50818ffcde7ede293ff4' && beitarImage
          }`}
          alt='My SVG'
        />
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
