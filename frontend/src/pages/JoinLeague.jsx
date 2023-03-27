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
    <div className='rtl bg-gray-200 px-6 py-4 rounded-lg shadow-lg'>
      <div className='flex items-center justify-between mb-4'>
        <input
          type='text'
          placeholder=' הדבק כאן את קוד הליגה   '
          className='rtl bg-white rounded-full py-2 px-4 focus:outline-none focus:shadow-outline w-full'
          onChange={(e) => setLeagueId(e.target.value)}
        />
        <button
          onClick={submitLeagueCode}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          אישור
        </button>
      </div>
      <div className='text-right text-gray-600'>
        {/* <p> {leagueId} ״הקוד יופיע לאחר יצירת הליגה״</p> */}
      </div>
    </div>
  )
}

export default JoinLeague
