import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

const StatusOfTeam = () => {
  const { budget } = useMyTeamContext()
  return (
    <div className=' w-full flex justify-center gap-2 bg-green-600 rounded-md'>
      <h1>תקציב שנשאר</h1>
      <h1>{budget} </h1>
      <h1> מיליון מתוך 120 מיליון </h1>
    </div>
  )
}

export default StatusOfTeam
