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
  const [isLeagueOpen, setIsLeagueOpen] = useState(false)
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
  {
  }
  if (user.teamOfUser !== null) {
    return (
      <div className=' w-full h-screen pt-10 flex flex-col justify-center'>
        {!isLeagueOpen && (
          <div className=' w-2/3 mx-auto flex '>
            <div className={`  w-1/2  `}>
              <button
                onClick={() => {
                  setIsOpen(!isOpen)
                  setIsJoinOpen(false)
                }}
                class='w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group '
              >
                <span
                  class={` w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute`}
                ></span>
                <span class='relative w-full px-6 py-3 transition-all ease-out bg-white  group-hover:bg-opacity-0 duration-400'>
                  <span class='relative from-[#ff8a05] via-[#ff5478] to-[#ff00c6]'>
                    {' צור ליגה '}
                  </span>
                </span>
              </button>
            </div>
            <div className=' w-1/2'>
              <button
                onClick={() => {
                  setIsJoinOpen(!isJoinOpen)
                  setIsOpen(false)
                }}
                class='w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group '
              >
                <span class='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
                <span class='relative w-full px-6 py-3 transition-all ease-out bg-white  group-hover:bg-opacity-0 duration-400'>
                  <span class='  '>{'  הצטרף לליגה  '}</span>
                </span>
              </button>
            </div>
          </div>
        )}

        {isOpen && (
          <div className=' w-4/6 mx-auto  '>
            <CreateLeague />
          </div>
        )}
        {isJoinOpen && (
          <div className='c w-4/6 mx-auto '>
            <JoinLeague />
          </div>
        )}
        <div>
          <div className=' w-2/3 mx-auto bg-white  '>
            <button
              onClick={() => {
                setIsLeagueOpen(!isLeagueOpen)
                setIsJoinOpen(false)
                setIsOpen(false)
              }}
              class='w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group '
            >
              <span class='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
              <span class='relative w-full px-6 py-3 transition-all ease-out bg-white  group-hover:bg-opacity-0 duration-400'>
                <span class='relative from-[#ff8a05] via-[#ff5478] to-[#ff00c6] '>
                  {!isLeagueOpen ? '  צפייה בליגות  שלי  ' : 'הליגות שלי :'}
                </span>
              </span>
            </button>
            {isLeagueOpen && (
              <table className=' w-full mx-auto    '>
                <thead>
                  <tr>
                    <th className=' w-2/3 bg-gradient-to-r from-[#ff8a05] via-[#ff5478] to-[#ff00c6] bg-clip-text  font-extrabold text-transparent sm:text-3xl'>
                      שם הליגה
                    </th>
                    <th className=' bg-gradient-to-r from-[#ff8a05] via-[#ff5478] to-[#ff00c6] bg-clip-text  font-extrabold text-transparent sm:text-3xl'>
                      משתתפים
                    </th>
                  </tr>
                </thead>
              </table>
            )}
          </div>

          {isLeagueOpen &&
            allLeaguesIn.map((league) => {
              return (
                <div className='w-2/3 mx-auto bg-white border-y border-gray-400 flex justify-between py-2'>
                  <div className=' w-2/3 border-l border-gray-400 mr-3 '>
                    <Link to={`/league/${league._id} `}>{league.name}</Link>
                  </div>
                  <div className=' w-1/3 flex justify-center  '>
                    <h1 className=' text-lg '>{league.teams.length}</h1>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  } else {
    return (
      <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[220px] w-2/3 md:w-1/2 bg-black gap-5 flex justify-center items-center flex-col '>
        בשביל להצטרף לליגה צריך לבנות קבוצה
      </div>
    )
  }
}

export default League
