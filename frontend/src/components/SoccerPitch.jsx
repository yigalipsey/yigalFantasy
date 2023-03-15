import React from 'react'

function SoccerPitch() {
  return (
    <div className='relative bg-green-500 border-2 border-black h-full'>
      <div className='absolute top-0 left-0 w-full h-full'>
        {/* Field lines */}
        <div className='absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-2'>
          <div className='bg-white w-px h-full'></div>
          <div className=' w-px h-full'></div>
          <div className='bg-white w-full h-px'></div>
          <div className='bg-white w-full h-px'></div>
        </div>
        {/* Center circle */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-[2px] border-white rounded-full w-24 h-24'></div>
        {/* Penalty boxes */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-18 border-2 border-white'></div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-18 border-2 border-white'></div>
        {/* Penalty spots */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-px h-px'></div>
        <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-px h-px'></div>
        <div className='absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-px h-px'></div>
        {/* Penalty box lines */}
        <div className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 bg-white h-px w-16'></div>
        <div className='absolute  border-2 border-b-0 bottom-0  border-white  left-1/2  -translate-x-1/2  h-[100px] w-[250px]'></div>
        <div className='absolute  border-2 border-t-0  top-0 border-white  left-1/2  -translate-x-1/2  h-[100px] w-[250px]'></div>

        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-2 rounded-full w-24 h-24'></div>
        <div className='absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-b-2 rounded-full w-24 h-24'></div>
      </div>
    </div>
  )
}

export default SoccerPitch
