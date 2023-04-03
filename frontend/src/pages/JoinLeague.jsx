//64219fa1afdb85c69fb39d76
import { useState } from 'react'
import { useCreate } from '../hooks/useCreate'
import { useLeaguesContext } from '../hooks/useLeaguesContext'

function JoinLeague() {
  const [leagueId, setLeagueId] = useState(null)
  const { JoinLeagueFunction } = useCreate()

  const submitLeagueCode = () => {
    JoinLeagueFunction({ leagueId })
  }

  return (
    <div className='rtl bg-gray-200 px-6 py-4  shadow-lg'>
      <div className='flex items-center justify-between mb-4'>
        <input
          type='text'
          placeholder=' הדבק כאן את קוד הליגה   '
          className='rtl bg-white  py-2 px-4 focus:outline-none focus:shadow-outline w-full'
          onChange={(e) => setLeagueId(e.target.value)}
        />
        <button
          onClick={submitLeagueCode}
          className='bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:bg-blue-700 text-white font-bold py-2 px-4 '
        >
          אישור
        </button>
      </div>
      <div className='text-right text-gray-600'>
        <p>לאחר ההצטרפות רענן את הדף </p>
      </div>
    </div>
  )
}

export default JoinLeague
