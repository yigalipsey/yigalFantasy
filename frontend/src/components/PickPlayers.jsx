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
  const [hasError, setHasError] = useState(false)
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
  const { dispatch, teamName, coachOfTeam, team } = useMyTeamContext()

  //fetch user team
  useEffect(() => {
    fetchAllPlayers()
  }, [])

  //function for build user team
  const handleBuildTeam = async (e) => {
    if (teamName === null) {
      setTeamNameError(true)
      setHasError(true)
    }

    if (coachOfTeam === null) {
      setCoachOfTeam(true)
      setHasError(true)
    }

    if (team.length < 3) {
      setTeamElevenError(true)
      setHasError(true)
    }

    //only if everithing filled build the team
    await createTeam()
  }

  const handleResetTeam = () => {
    dispatch({ type: 'RESET_TEAM' })
  }

  return (
    <div className=' w-5/6 md:w-4/6 mx-auto '>
      {teamNameError && coachOfTeamError && teamElevenError ? (
        <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[120px] w-1/2 bg-black flex flex-col'>
          <h1>נא להשלים :</h1>
          <div>{teamNameErrorDetails}</div>
          <div>{coachOfTeamErrorDetails}</div>
          <div>{teamElevenErrorDetails}</div>
        </div>
      ) : teamNameError && coachOfTeamError ? (
        <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[120px] w-1/2 bg-black flex flex-col'>
          <h1>נא להשלים :</h1>
          <div>{teamNameErrorDetails}</div>
          <div>{coachOfTeamErrorDetails}</div>
        </div>
      ) : coachOfTeamError && teamElevenError ? (
        <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[120px] w-1/2 bg-black flex flex-col'>
          <h1>נא להשלים :</h1>
          <div>{teamElevenErrorDetails}</div>
          <div>{coachOfTeamErrorDetails}</div>
        </div>
      ) : (
        teamElevenError &&
        teamNameError && (
          <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[100px] w-1/2 bg-black flex flex-col'>
            <h1>נא להשלים :</h1>
            <div>{teamElevenErrorDetails}</div>
            <div>{teamElevenErrorDetails}</div>
          </div>
        )
      )}

      <div className='flex w-full'>
        <Inputs />
      </div>

      <div className=' h-64 overflow-y-auto mt-5 '>
        <SelectPlayerByFilter />
      </div>

      <div>
        <PriceSlider />
      </div>
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
      <div className='flex mt-2 pb-96'>
        <DropDownByPosition />
        <DropDownByTeam />
      </div>
    </div>
  )
}

export default PickPlayers
