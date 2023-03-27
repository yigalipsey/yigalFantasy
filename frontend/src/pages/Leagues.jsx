import { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useLeaguesContext } from '../hooks/useLeaguesContext'
import CreateLeague from './CreateLeague'
import LeagueTable from './LeagueTable'

function League() {
  const [isOpen, setIsOpen] = useState(false)
  const { fetchAllUsersTeams } = useFetchData()
  const { mainLeague } = useLeaguesContext()

  // Sort the array by points in descending order
  mainLeague.sort((a, b) => b.points - a.points)

  useEffect(() => {
    const fetchMainLeagueData = async () => {
      await fetchAllUsersTeams()
    }
    fetchMainLeagueData()
  }, [])

  return (
    <div className=' w-full h-screen pt-10 bg-gray-500 flex flex-col justify-center'>
      <div className=' w-1/2 mx-auto bg-red flex justify-between'>
        <button onClick={() => setIsOpen(!isOpen)}>צור ליגה </button>
        <button>הצטרף לליגה קיימת </button>
      </div>
      {isOpen && (
        <div className='c w-1/2 mx-auto bg-green-300 '>
          <CreateLeague />
        </div>
      )}
      <div>
        <div className=' w-1/2 mx-auto bg-yellow '>
          <h1>הליגות שלי</h1>
          <table className=' w-full mx-auto bg-green-500 border'>
            <thead>
              <tr>
                <th className=''>שם הליגה</th>
                <th className=''>משתתפים</th>
              </tr>
            </thead>
          </table>
        </div>
        {/* <LeagueTable league={mainLeague} /> */}
      </div>
    </div>
  )
}

export default League
