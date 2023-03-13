import React from 'react'

const TeamDetails = ({ _id, name, players, wins }) => {
  return (
    <div className=' bg-gray-600 mt-10 ' key={_id}>
      <h2 className=' text-blue-500'>{name}</h2>
      <h1 className=' text-red-700'>{_id}</h1>
      <ul>
        {players.map((item) => (
          <Player key={item._id} {...item} />
        ))}
      </ul>
    </div>
  )
}

function Player({ name, _id }) {
  return (
    <div className=''>
      <div className=' text-yellow-400'>{name}</div>
      <h1 className='text-red-600'>{_id}</h1>
    </div>
  )
}

export default TeamDetails
