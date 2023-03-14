import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'
import { useDataContext } from '../hooks/useDataContext'

const SelectPlayerByTeam = () => {
  const { teams } = useDataContext()
  return (
    <div className=''>
      {teams.map((team) => (
        <div key={team.name}>
          <h2 className='  bg-green-500 w-[full]'>{team.name}</h2>
          <ul>
            {team.players.map((player) => (
              <Player key={player._id} player={player} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Player({ player }) {
  const { dispatch } = useMyTeamContext()

  const selectPlayer = () => {
    console.log('here' + player.name)
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
export default SelectPlayerByTeam
