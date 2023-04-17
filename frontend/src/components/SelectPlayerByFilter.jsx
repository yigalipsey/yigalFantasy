import { useState } from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'
import { useDataContext } from '../hooks/useDataContext'
import ErrorMsg from './ErrorMsg'

const SelectPlayerByFilter = () => {
  const { teams, positionToFilter, teamToFilter, priceToFilter } =
    useDataContext()

  return (
    <div className='  bg-opaque-black  '>
      {teams.map((team) =>
        teamToFilter === null ? (
          <div key={team.name}>
            <ul>
              {team.players.map((player) =>
                positionToFilter === null ? (
                  priceToFilter === null ? (
                    <Player key={player._id} player={player} />
                  ) : (
                    priceToFilter === player.price && (
                      <Player key={player._id} player={player} />
                    )
                  )
                ) : (
                  positionToFilter === player.position &&
                  (priceToFilter === null ? (
                    <Player key={player._id} player={player} />
                  ) : (
                    priceToFilter === player.price && (
                      <Player key={player._id} player={player} />
                    )
                  ))
                )
              )}
            </ul>
          </div>
        ) : (
          teamToFilter === team.name && (
            <div key={team.name}>
              {team.players.map((player) =>
                positionToFilter === null ? (
                  priceToFilter === null ? (
                    <Player key={player._id} player={player} />
                  ) : (
                    priceToFilter === player.price && (
                      <Player key={player._id} player={player} />
                    )
                  )
                ) : (
                  positionToFilter === player.position &&
                  (priceToFilter === null ? (
                    <Player key={player._id} player={player} />
                  ) : (
                    priceToFilter === player.price && (
                      <Player key={player._id} player={player} />
                    )
                  ))
                )
              )}
            </div>
          )
        )
      )}
    </div>
  )
}

function Player({ player }) {
  const [allReadyPickedError, setAllReadyPickedError] = useState(false)
  const [allReadyPickedErrors, setAllReadyPickedErrors] = useState(false)
  const [isOverBudget, setIsOverBudget] = useState(false)

  const {
    dispatch,
    defencePlayers,
    attackePlayers,
    midfielderPlayers,
    goalkeeperPlayers,
    allReadyPicked,
    team,
    teamIdArray,
    budget,
  } = useMyTeamContext()

  const selectPlayer = ({ player }) => {
    const isAllReadyPicked = allReadyPicked.some((p) => p._id === player._id)

    //if user select more than 4 players at same team
    const isOverTheTeamLimit = teamIdArray.filter(
      (team) => team === player.team
    ).length

    //if user is already picked show error
    if (isAllReadyPicked) {
      setAllReadyPickedError(true)
      //reset to false if user will press few times
      setTimeout(() => {
        setAllReadyPickedError(false)
      }, 2000)
    }

    //if user try to add over 4 players from
    if (isOverTheTeamLimit === 4) {
      setAllReadyPickedErrors(true)
    }

    if (budget - player.price < 0) {
      setIsOverBudget(true)
    }
    if (
      team.length < 11 &&
      !isAllReadyPicked &&
      isOverTheTeamLimit < 4 &&
      budget - player.price > -1
    ) {
      if (player.position === 'שוער' && goalkeeperPlayers < 1) {
        dispatch({ type: 'ADD_GK', payload: player })
      }

      if (player.position === 'הגנה' && defencePlayers <= 4 && budget) {
        dispatch({ type: 'ADD_DEFENCE_PLAYER', payload: player })
      }
      if (player.position === 'קישור' && midfielderPlayers <= 4) {
        dispatch({ type: 'ADD_MIDFIELDER_PLAYER', payload: player })
      }
      if (player.position === 'התקפה' && attackePlayers <= 2 && budget) {
        dispatch({ type: 'ADD_ATTACK_PLAYER', payload: player })
      }
    }
  }

  const removePlayer = ({ player }) => {
    //check if the player is picked - only if picked you can remove
    const isPick = team.map((p) => p._id === player._id)
    console.log(isPick)

    if (isPick.length === 0) {
      return
    }

    if (isPick) {
      //search index to delete from array of multiple players from same team
      const indexToDelete = teamIdArray.findIndex(
        (team) => team === player.team
      )

      console.log(indexToDelete)

      dispatch({ type: 'DELETE_FROM_TEAM_ARRAY', payload: indexToDelete })

      if (player.position === 'שוער') {
        dispatch({ type: 'REMOVE_GK', payload: player })
      }
      if (player.position === 'הגנה') {
        dispatch({ type: 'REMOVE_DEFENCE_PLAYER', payload: player })
      }
      if (player.position === 'קישור') {
        dispatch({ type: 'REMOVE_MIDFIELDER_PLAYER', payload: player })
      }
      if (player.position === 'התקפה') {
        dispatch({ type: 'REMOVE_ATTACK_PLAYER', payload: player })
      }
    }
  }

  return (
    <>
      <div className=' mt-1 flex py-2 border-t text-white  '>
        <div className=' w-4/6 '>
          <h1 className='mr-1'>{player.name}</h1>
        </div>

        <div className=' w-1/6'>
          <h1 className='border-l'>{player.price}M$</h1>
        </div>

        <div className=' w-1/6 border-l'>
          <button className=' mr-2' onClick={() => selectPlayer({ player })}>
            בחר
          </button>
        </div>

        <div className=' w-1/6'>
          <button className=' mr-2' onClick={() => removePlayer({ player })}>
            הסר
          </button>
        </div>
      </div>
      <div>
        {allReadyPickedError ? (
          <ErrorMsg error={'לא ניתן לבחור את אותו השחקן פעמיים'} />
        ) : allReadyPickedErrors ? (
          <ErrorMsg error={'לא ניתן לבחור מעל ל4 שחקנים מאותה הקבוצה '} />
        ) : (
          isOverBudget && (
            <ErrorMsg error={'לא ניתן לבחור שחקן בחריגה מהתקציב '} />
          )
        )}
      </div>
    </>
  )
}
export default SelectPlayerByFilter
