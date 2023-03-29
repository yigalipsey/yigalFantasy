import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'
import { useLeaguesContext } from '../hooks/useLeaguesContext'
import { Link } from 'react-router-dom'

const LeagueTable = ({ league }) => {
  const { fetchSpecificLeague } = useFetchData()
  const { specificLeague } = useLeaguesContext()
  let { _id } = useParams()

  useEffect(() => {
    const fetchSpecificLeagueData = async () => {
      await fetchSpecificLeague(_id)
    }
    fetchSpecificLeagueData()
  }, [])

  return (
    <div className=' w-full rounded-lg shadow-md pt-24 h-screen  '>
      <table className='table-auto w-2/3 md:w-1/2 mx-auto bg-red-500 border mt-24  '>
        <thead>
          <tr>
            <th className='px-4 py-2'>דירוג</th>
            <th className='px-4 py-2'>שם קבוצה</th>
            <th className='px-4 py-2'>מאמן הקבוצה</th>
            <th className='px-4 py-2'>נקודות</th>
          </tr>
        </thead>
        <tbody>
          {specificLeague?.teams?.length >= 1 &&
            specificLeague.teams.map((team, index) => (
              <tr key={team.teamName}>
                <td className='border px-4 py-2'>
                  <Link to={`/team/${team._id} `}>{index + 1}</Link>
                </td>

                <td className='border px-4 py-2'>{team.teamName}</td>
                <td className='border px-4 py-2'>{team.coachOfTeam}</td>
                <td className='border px-4 py-2'>{team.totalPoints}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeagueTable
