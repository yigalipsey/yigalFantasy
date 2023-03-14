import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

const SelectByPosition = ({ _id, name, players }) => {
  const forwards = players.filter((player) => player.position === 'Forward')
  const midfielders = players.filter(
    (player) => player.position === 'Midfielder'
  )
  const defenders = players.filter((player) => player.position === 'Defender')
  return (
    <div className='  ' key={_id}>
      <div className='  bg-green-500 w-[full]'>
        <h2 className=' text-blue-500'>{name}</h2>
        <h1 className=' text-red-700'>{}</h1>
      </div>
      <div>
        <ul>
          {players.map((player) => (
            <Player key={player._id} player={player} />
          ))}
        </ul>
      </div>
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

export default SelectByPosition
