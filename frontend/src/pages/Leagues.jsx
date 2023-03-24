import { useEffect } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useLeaguesContext } from '../hooks/useLeaguesContext'
import LeagueTable from './LeagueTable'

function League() {
  const { fetchAllUsersTeams } = useFetchData()
  const { mainLeague } = useLeaguesContext()

  // Sort the array by points in descending order
  mainLeague.sort((a, b) => b.points - a.points)

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllUsersTeams()
    }
    fetchData()
  }, [])

  return (
    <div className=' w-full h-screen pt-10 bg-gray-500 flex flex-col justify-center'>
      <div>
        <div className=' w-1/2 mx-auto bg-yellow '>
          <h1>הליגה הראשית</h1>
        </div>
        <LeagueTable league={mainLeague} />
      </div>
    </div>
  )
}

export default League
