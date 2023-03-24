import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'

function League({ teams }) {
  const { fetchAllUsersTeams } = useFetchData()

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllUsersTeams()
    }
    fetchData()
  }, [])
  return (
    <div className='bg-white rounded-lg shadow-md p-2'>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>#</th>
            <th className='px-4 py-2'>Team Name</th>
            <th className='px-4 py-2'>Coach</th>
            <th className='px-4 py-2'>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {/* {teams.map((team, index) => (
            <tr key={team.teamName}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{team.teamName}</td>
              <td className='border px-4 py-2'>{team.teamCoach}</td>
              <td className='border px-4 py-2'>{team.totalPoints}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default League
