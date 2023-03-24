import Pitch from '../components/SoccerPitch'
import PlayersOnPitch from '../components/PlayersOnPitch'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogin } from '../hooks/useLogin'
import { useEffect } from 'react'

const MyTeamPage = () => {
  const { fetchUserTeam } = useLogin()
  const { user } = useAuthContext()
  const email = user.email

  useEffect(() => {
    const fetchData = async () => {
      await fetchUserTeam(email)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className=' grid grid-cols-1 mym:grid-cols-2 gap-4 w-full md:w-5/6 m-auto  pt-10'>
        <div className='w-full order-1 md:order-2 mx-auto '></div>
        <div className='w-full mt-10'>
          <div>
            <div className='relative w-[350px]  h-[600px]  mx-auto'>
              <Pitch />
              <div className=' absolute top-0 -left-0'>
                <PlayersOnPitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyTeamPage
