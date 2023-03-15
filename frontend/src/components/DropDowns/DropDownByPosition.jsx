import React, { useState } from 'react'
import { useDataContext } from '../../hooks/useDataContext'

const DropDownByPosition = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('בחר על פי עמדה')
  const { dispatch } = useDataContext()

  const options = ['התקפה', 'קישור', 'הגנה', 'שוער', 'כל העמדות']

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    dispatch({ type: 'SET_POSITION_TO_FILTER', payload: option })
    if (option === 'כל העמדות') {
      dispatch({ type: 'SET_POSITION_TO_FILTER', payload: null })
    }
  }

  return (
    <div className='relative inline-block text-right'>
      <div>
        <button
          className='inline-flex justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className='py-1' dir='rtl'>
          {options.map((option) => (
            <button
              key={option}
              className='w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DropDownByPosition
