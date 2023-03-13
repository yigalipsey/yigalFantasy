import React from 'react'
import { useMyTeamContext } from '../hooks/useMyTeamContext'

const TeamDetails = ({ _id, name, players }) => {
  return (
    <div className=' mt-10 ' key={_id}>
      <div className='  bg-green-500 w-full'>
        <h2 className=' text-blue-500'>{name}</h2>
        <h1 className=' text-red-700'>{}</h1>
      </div>
      <div>
        <ul>
          {players.map((item) => (
            <Player key={item._id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function Player({ name, _id, position, price }) {
  const { dispatch } = useMyTeamContext()

  const selectPlayer = (_id) => {
    // update the myTeam context
    dispatch({ type: 'ADD_PLAYER', payload: _id })
  }

  return (
    <div className=' mt-4 flex space-x-2 '>
      <div className=' text-yellow-400'>{name}</div>
      <h1 className=' text-green-700'>${price}M</h1>
      <button onClick={() => selectPlayer(_id)}>בחר</button>
    </div>
  )
}

export default TeamDetails
