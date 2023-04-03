import { useState } from 'react'
import { useCreate } from '../hooks/useCreate'
import { useLeaguesContext } from '../hooks/useLeaguesContext'

function CreateLeague() {
  const [leagueName, setLeagueName] = useState(null)
  const { createLeague } = useCreate()
  const { leagueId } = useLeaguesContext()

  const submitLeagueName = () => {
    createLeague({ leagueName })
  }

  return (
    <div className='rtl  px-6 py-4 bg-gray-200 shadow-lg'>
      <div className='flex items-center justify-between mb-4'>
        <input
          type='text'
          placeholder=' כתוב את שם הליגה'
          className='rtl bg-white py-2 px-4 focus:outline-none focus:shadow-outline w-full'
          onChange={(e) => setLeagueName(e.target.value)}
        />
        <button
          onClick={submitLeagueName}
          className='bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:bg-blue-700 text-white font-bold py-2 px-4 '
        >
          אישור
        </button>
      </div>
      <div className='text-right '>
        <p>{leagueId === null && 'לאחר בניית הליגה יופיע קוד הליגה'} </p>
        <p> {leagueId} </p>
      </div>
    </div>
  )
}

export default CreateLeague
