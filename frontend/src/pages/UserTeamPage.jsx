import Pitch from '../components/SoccerPitch'
import PlayersOnPitch from '../components/PlayersOnPitch'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useFetchData } from '../hooks/useFetchData'
import { useEffect } from 'react'

const UserTeamPage = () => {
  const { fetchUserTeamByMail, fetchUserTeamById } = useFetchData()
  const { user } = useAuthContext()
  let { _id } = useParams()
  const email = user.email

  useEffect(() => {
    console.log(_id)
    const fetchDataByMail = async () => {
      await fetchUserTeamByMail(email)
    }
    const fetchDataById = async () => {
      await fetchUserTeamById(_id)
    }

    if (_id === undefined) {
      fetchDataByMail()
    }
    if (_id !== undefined) {
      fetchDataById()
    }
  }, [])

  return (
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
  )
}

export default UserTeamPage
