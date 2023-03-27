import { useState } from 'react'
import { useCreate } from '../hooks/useCreate'

function CreateLeague() {
  const [leagueName, setLeagueName] = useState(null)
  const { createLeague } = useCreate()

  const submitLeagueName = () => {
    createLeague({ leagueName })
  }

  return (
    <div className='rtl bg-gray-200 px-6 py-4 rounded-lg shadow-lg'>
      <div className='flex items-center justify-between mb-4'>
        <input
          type='text'
          placeholder=' כתוב את שם הליגה'
          className='rtl bg-white rounded-full py-2 px-4 focus:outline-none focus:shadow-outline w-full'
          onChange={(e) => setLeagueName(e.target.value)}
        />
        <button
          onClick={submitLeagueName}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          אישור
        </button>
      </div>
      <div className='text-right text-gray-600'>
        <p> </p>
      </div>
    </div>
  )
}

export default CreateLeague
