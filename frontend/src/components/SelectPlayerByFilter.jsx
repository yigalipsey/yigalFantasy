import { useState } from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'
import { useDataContext } from '../hooks/useDataContext'

const SelectPlayerByFilter = () => {
  const { teams, positionToFilter, teamToFilter, priceToFilter } =
    useDataContext()

  return (
    <div className=' '>
      {teams.map((team) =>
        teamToFilter === null ? (
          <div key={team.name}>
            <h2 className='  bg-green-500 w-[full]'>שחקנים</h2>
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
              <h2 className='  bg-green-500 w-[full]'>שחקנים</h2>
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
  const {
    dispatch,
    defencePlayers,
    teamLength,
    attackePlayers,
    midfielderPlayers,
    goalkeeperPlayers,
  } = useMyTeamContext()

  const selectPlayer = ({ player }) => {
    // update the myTeam context
    if (teamLength <= 11) {
      if (player.position === 'שוער' && goalkeeperPlayers < 1) {
        dispatch({ type: 'ADD_GK', payload: player })
      }

      if (player.position === 'הגנה' && defencePlayers <= 4) {
        dispatch({ type: 'ADD_DEFENCE_PLAYER', payload: player })
      }
      if (player.position === 'קישור' && midfielderPlayers <= 4) {
        dispatch({ type: 'ADD_MIDFIELDER_PLAYER', payload: player })
      }
      if (player.position === 'התקפה' && attackePlayers <= 2) {
        dispatch({ type: 'ADD_ATTACK_PLAYER', payload: player })
      }
    }
  }

  return (
    <div className=' mt-4 flex space-x-2 '>
      <div className=' text-yellow-400'>{player.name}</div>
      <h1 className=' text-green-700'>{player.price}M$</h1>
      <button onClick={() => selectPlayer({ player })}>בחר</button>
    </div>
  )
}
export default SelectPlayerByFilter
