import { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useLeaguesContext } from '../hooks/useLeaguesContext'
import CreateLeague from './CreateLeague'
import LeagueTable from './LeagueTable'
import { Link } from 'react-router-dom'

function League() {
  const [isOpen, setIsOpen] = useState(false)
  const { fetchAllUsersTeams, fetchUserLeagues } = useFetchData()
  const { allLeaguesIn } = useLeaguesContext()

  useEffect(() => {
    const fetchMainLeagueData = async () => {
      await fetchAllUsersTeams()
      await fetchUserLeagues()
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
        {/*  */}
        {allLeaguesIn.map((league) => {
          return (
            <div className='w-1/2 mx-auto bg-green-500 border flex justify-between'>
              <Link
                className='w-[100px] bg-violet-50'
                to={`/league/${league._id} `}
              >
                {league.name}
              </Link>
              <div>{league.teams.length}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default League
