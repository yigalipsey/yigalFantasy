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
  const { dispatch } = useMyTeamContext()

  const selectPlayer = () => {
    // console.log('select player' + player.name)
    // update the myTeam context
    dispatch({ type: 'ADD_PLAYER', payload: player })
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
