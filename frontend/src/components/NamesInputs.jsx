import React from 'react'

const NamesInputs = () => {
  return (
    <div className='flex '>
      <label htmlFor='input1' className='text-sm'>
        {/* Input 1: */}
      </label>
      <input
        id='input1'
        type='text'
        className='border border-gray-400 p-2 rounded-md text-sm'
        name='input1'
      />

      <label htmlFor='input2' className='text-sm'>
        {/* Input 2: */}
      </label>
      <input
        id='input2'
        type='text'
        className='border border-gray-400 p-2 rounded-md text-sm'
        name='input2'
      />
    </div>
  )
}

export default NamesInputs
