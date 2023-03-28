import { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useLeaguesContext } from '../hooks/useLeaguesContext'
import { useAuthContext } from '../hooks/useAuthContext'
import CreateLeague from './CreateLeague'
import { Link } from 'react-router-dom'
import JoinLeague from './JoinLeague'

function League() {
  const [isOpen, setIsOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const { fetchAllUsersTeams, fetchUserLeagues } = useFetchData()
  const { allLeaguesIn } = useLeaguesContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchUserLeagueData = async () => {
      await fetchAllUsersTeams()
      await fetchUserLeagues()
    }

    if (user.teamOfUser !== null) {
      fetchUserLeagueData()
    }
  }, [])

  if (user.teamOfUser !== null) {
    return (
      <div className=' w-full h-screen pt-10 flex flex-col justify-center'>
        <div className=' w-1/2 mx-auto bg-red flex justify-between'>
          <button onClick={() => setIsOpen(!isOpen)}>צור ליגה </button>
          <button onClick={() => setIsJoinOpen(!isOpen)}>
            הצטרף לליגה קיימת{' '}
          </button>
        </div>
        {isOpen && (
          <div className='c w-1/2 mx-auto bg-green-300 '>
            <CreateLeague />
          </div>
        )}
        {isJoinOpen && (
          <div className='c w-1/2 mx-auto bg-green-300 '>
            <JoinLeague />
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
  } else {
    return (
      <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[220px] w-1/2 bg-black gap-5 flex justify-center items-center flex-col '>
        בשביל להצטרף לליגה צריך לבנות קבוצה
      </div>
    )
  }
}

export default League
