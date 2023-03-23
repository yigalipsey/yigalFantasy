import { useEffect, useContext, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCreateMyTeam } from '../hooks/useCreateMyTeam'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

//components
import DropDownByPosition from './DropDowns/DropDownByPosition'
import DropDownByTeam from './DropDowns/DropDownByTeam'
import PriceSlider from './PriceSlider'
import Inputs from './Inputs'
import SelectPlayerByFilter from './SelectPlayerByFilter'
import ErrorMsg from './ErrorMsg'

const PickPlayers = () => {
  //Errros if has

  const [teamNameError, setTeamNameError] = useState(false)
  const [coachOfTeamError, setCoachOfTeam] = useState(false)
  const [teamElevenError, setTeamElevenError] = useState(false)

  //Text of eroors
  const teamNameErrorDetails = 'בחירת שם קבוצה'
  const coachOfTeamErrorDetails = 'בחירת שם מאמן'
  const teamElevenErrorDetails = 'בחירת 11 שחקנים '

  const { user } = useAuthContext()
  const { createTeam } = useCreateMyTeam()
  const { fetchAllPlayers } = useFetchData()
  const { dispatch, teamName, coachOfTeam, team, attackePlayers } =
    useMyTeamContext()

  //fetch user team
  useEffect(() => {
    fetchAllPlayers()
  }, [])

  //function for build user team
  const handleBuildTeam = async (e) => {
    if (teamName === null) {
      setTeamNameError(true)
    }

    if (coachOfTeam === null) {
      setCoachOfTeam(true)
    }

    if (team.length < 11) {
      setTeamElevenError(true)
    }

    //only if evrething filled build the team
    if (
      team.length === 11 &&
      teamName !== null &&
      coachOfTeam !== null &&
      attackePlayers >= 1
    ) {
      await createTeam()
    }
  }

  const handleResetTeam = () => {
    dispatch({ type: 'RESET_TEAM' })
  }

  return (
    <div className=' w-5/6 md:w-4/6 mx-auto '>
      {/* {Error handeling} */}
      {teamNameError && coachOfTeamError && teamElevenError ? (
        <ErrorMsg
          error1='נא להשלים :'
          error2='בחירת שם קבוצה'
          error3='בחירת שם מאמן'
          error4='בחירת 11 שחקנים'
        />
      ) : teamNameError && coachOfTeamError ? (
        <ErrorMsg
          error1='נא להשלים :'
          error2='בחירת שם קבוצה'
          error3='בחירת שם מאמן'
        />
      ) : coachOfTeamError && teamElevenError ? (
        <ErrorMsg
          error1='נא להשלים :'
          error2='בחירת שם מאמן'
          error3='בחירת 11 שחקנים'
        />
      ) : (
        teamElevenError &&
        teamNameError && (
          <ErrorMsg
            error1='נא להשלים :'
            error2='בחירת שם קבוצה'
            error3='בחירת 11 שחקנים'
          />
        )
      )}

      {/* {inputs for team name and team coach} */}
      <div className='flex w-full'>
        <Inputs />
      </div>

      {/* {component of choosing players to the team} */}
      <div className=' h-64 overflow-y-auto mt-5 '>
        <SelectPlayerByFilter />
      </div>
      {/* {slider of sort by price} */}
      <div>
        <PriceSlider />
      </div>
      {/* {buttons for build and reset team} */}
      <div
        className='px-4 py-2 rounded-md  flex justify-between  bg-white
       w-full mt-1'
      >
        <button
          onClick={() => handleBuildTeam()}
          className='hover:bg-green-600 w-1/2 '
        >
          בנה קבוצה
        </button>
        <button
          onClick={() => handleResetTeam()}
          className='hover:bg-green-600 w-1/2'
        >
          אפס קבוצה
        </button>
      </div>
      {/* {2 drop downs for sort players by position and by team} */}
      <div className='flex mt-2 pb-96'>
        <DropDownByPosition />
        <DropDownByTeam />
      </div>
    </div>
  )
}

export default PickPlayers
