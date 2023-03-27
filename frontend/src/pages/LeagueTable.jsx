import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'

const LeagueTable = ({ league }) => {
  const { fetchSpecificLeague } = useFetchData()
  let { _id } = useParams()

  useEffect(() => {
    const fetchSpecificLeagueData = async () => {
      await fetchSpecificLeague(_id)
    }
    fetchSpecificLeagueData()
  }, [])

  return (
    <div className=' w-full rounded-lg shadow-md '>
      {/* <table className='table-auto w-1/2 mx-auto bg-red-500 border'>
        <thead>
          <tr>
            <th className='px-4 py-2'>דירוג</th>
            <th className='px-4 py-2'>שם קבוצה</th>
            <th className='px-4 py-2'>מאמן הקבוצה</th>
            <th className='px-4 py-2'>נקודות</th>
          </tr>
        </thead>
        <tbody>
          {league.teams.map((team, index) => (
            <tr key={team.teamName}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{team.teamName}</td>
              <td className='border px-4 py-2'>{team.coachOfTeam}</td>
              <td className='border px-4 py-2'>{team.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default LeagueTable
