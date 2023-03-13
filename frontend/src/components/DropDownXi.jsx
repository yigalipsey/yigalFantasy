import { useState } from 'react'

const xiOptions = [
  { label: '4-3-3', value: '433' },
  { label: '5-2-3', value: '523' },
  { label: '4-4-2', value: '442' },
]

function DropDownXi() {
  const [selectedOption, setSelectedOption] = useState(xiOptions[0])

  const handleOptionChange = (event) => {
    console.log('clicked')
    const selectedValue = event.target.value
    const selectedOption = xiOptions.find(
      (option) => option.value === selectedValue
    )
    setSelectedOption(selectedOption)
  }

  let selectedSetup = '4-3-3' // Assume this is the selected setup

  let playersArray = []

  if (selectedSetup === '4-3-3') {
    playersArray = []
  } else if (selectedSetup === '5-2-3') {
    playersArray = []
  } else if (selectedSetup === '4-4-2') {
    playersArray = []
  } else {
    console.log('Invalid setup selected')
  }

  return (
    <div className='relative inline-block text-right'>
      <select
        className='appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        value={selectedOption.value}
        onChange={handleOptionChange}
        dir='rtl' // add this prop to support RTL languages
      >
        {xiOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M14.707 7.293a1 1 0 00-1.414 0L10 10.586l-3.293-3.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z' />
        </svg>
      </div>
    </div>
  )
}

export default DropDownXi
