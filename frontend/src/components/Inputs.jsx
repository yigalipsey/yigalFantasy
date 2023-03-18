import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

function Inputs() {
  const { dispatch } = useMyTeamContext()

  const handleCoachChange = (event) => {
    const coachName = event.target.value
    dispatch({ type: 'SET_TEAM_COACH', payload: coachName })
  }
  const handleTeamNameChange = (event) => {
    const teamName = event.target.value
    dispatch({ type: 'SET_TEAM_NAME', payload: teamName })
  }

  return (
    <div className='md:flex '>
      <div>
        <input
          className='bg-white rounded-lg ring-1 shadow-sm border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none text-sm text-gray-600 placeholder-gray-400 py-2 px-4 leading-5'
          type='text'
          placeholder='הכנס שם קבוצה'
          onChange={handleTeamNameChange}
        />
      </div>

      <div>
        <input
          className='bg-white rounded-lg ring-1 shadow-sm border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none text-sm text-gray-600 placeholder-gray-400 py-2 px-4 leading-5'
          type='email'
          placeholder='הכנס שם מאמן'
          onChange={handleCoachChange}
        />
      </div>
    </div>
  )
}

export default Inputs
