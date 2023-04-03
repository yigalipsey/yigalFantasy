import { useEffect, useContext, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCreate } from '../hooks/useCreate'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

//components
import DropDownByPosition from './DropDowns/DropDownByPosition'
import DropDownByTeam from './DropDowns/DropDownByTeam'
import PriceSlider from './PriceSlider'
import Inputs from './Inputs'
import SelectPlayerByFilter from './SelectPlayerByFilter'
import StatusOfTeam from './StatusOfTeam'

const PickPlayers = () => {
  const [errors, setErrors] = useState(true)
  const [teamError, setTeamError] = useState(true)
  const [coachError, setCoachError] = useState(true)
  const [elevenError, setElevenError] = useState(true)
  const [attackError, setAttackError] = useState(true)
  const [tryToBuild, setTryToBuild] = useState(false)

  //contexts
  const { user } = useAuthContext()
  const { createTeam } = useCreate()
  const { fetchAllPlayers } = useFetchData()
  const { dispatch, teamName, team, coachOfTeam, attackePlayers } =
    useMyTeamContext()

  //fetch user team
  useEffect(() => {
    console.log()
    fetchAllPlayers()
  }, [])

  //function for build user team
  const handleBuildTeam = async (e) => {
    //check if teamName missing
    {
      teamName === null ? setTeamError(true) : setTeamError(false)
    }

    //check if coachOfTeam missing
    {
      coachOfTeam === null ? setCoachError(true) : setCoachError(false)
    }

    //check if user pick 11 players
    {
      team.length !== 11 ? setElevenError(true) : setElevenError(false)
    }

    //check if user pick at least 1 attacking player
    {
      attackePlayers === 0 ? setAttackError(true) : setAttackError(false)
    }

    //display errors when try to build
    setTryToBuild(true)
    setTimeout(() => {
      setTryToBuild(false)
    }, 2000) // 1000 milliseconds = 1 second

    if (
      teamName !== null &&
      coachOfTeam !== null &&
      attackePlayers !== 0 &&
      team.length === 11
    ) {
      setErrors(false)
      await createTeam()
      console.log('team here')
    } else {
    }
  }

  const handleResetTeam = () => {
    dispatch({ type: 'RESET_TEAM' })
  }

  return (
    <>
      {/* {check if there is any error and display } */}
      {errors && tryToBuild && (
        <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[220px] w-1/2 bg-black gap-5 flex justify-center items-center flex-col '>
          <h1>לא ניתן לבנות קבוצה ללא :</h1>
          {teamError && <h1>שם קבוצה</h1>}
          {coachError && <h1>מאמן</h1>}
          {elevenError && <h1>11 שחקנים</h1>}
          {attackError && <h1>מינימום שחקן התקפה</h1>}
        </div>
      )}

      <div className=' w-5/6 md:w-4/6 mx-auto '>
        {/* {inputs for team name and team coach} */}
        <div className='flex w-full'>
          <Inputs />
        </div>

        <div>
          <StatusOfTeam />
        </div>

        {/* {component of choosing players to the team} */}
        <div className=' h-64 overflow-y-auto '>
          <SelectPlayerByFilter />
        </div>
        {/* {slider of sort by price} */}
        <div>
          <PriceSlider />
        </div>
        {/* {buttons for build and reset team} */}
        <div className='px-4 py-2 rounded-md  flex   bg-white w-full mt-1'>
          <div className=' w-1/2 flex justify-center border-l  border-l-green-500 '>
            <button onClick={() => handleBuildTeam()}>בנה קבוצה</button>
          </div>
          <div className=' w-1/2 flex justify-center'>
            <button onClick={() => handleResetTeam()}>אפס קבוצה</button>
          </div>
        </div>
        {/* {2 drop downs for sort players by position and by team} */}
        <div className='flex mt-2 pb-96'>
          <DropDownByPosition />
          <DropDownByTeam />
        </div>
      </div>
    </>
  )
}

export default PickPlayers
