import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useLeaguesContext } from '../hooks/useLeaguesContext'

function League() {
  const { fetchAllUsersTeams } = useFetchData()
  const { mainLeague } = useLeaguesContext()
  useEffect(() => {
    const fetchData = async () => {
      await fetchAllUsersTeams()
    }
    fetchData()
  }, [])
  return (
    <div className='bg-white rounded-lg shadow-md p-[300px]'>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>דירוג</th>
            <th className='px-4 py-2'>שם קבוצה</th>
            <th className='px-4 py-2'>מאמן הקבוצה</th>
            <th className='px-4 py-2'>נקודות</th>
          </tr>
        </thead>
        <tbody>
          {mainLeague.map((team, index) => (
            <tr key={team.teamName}>
              <td className='border px-4 py-2'>{index + 1}</td>
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

export default League
