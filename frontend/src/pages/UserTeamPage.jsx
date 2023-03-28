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

    //fetch only if user created the team
    if (_id === undefined && user.teamOfUser !== null) {
      fetchDataByMail()
    }

    //fetch team of others
    if (_id !== undefined) {
      fetchDataById()
    }
  }, [])

  return (
    <div
      className=' grid grid-cols-1 mym:grid-cols-2  w-full md:w-5/6 m-auto pb-10
      pt-10'
    >
      {/* <div className='order-1 md:order-2 mx-auto w-[350px] bg-orange-600 h-[30px]  mt-1'>
        הקבוצה של :
      </div> */}
      <div className='w-full mt-5'>
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
