import React from 'react'

const TeamDetails = ({ _id, name, players }) => {
  return (
    <div className=' mt-10 ' key={_id}>
      <h2 className=' text-blue-500'>{name}</h2>
      <h1 className=' text-red-700'>{}</h1>
      <ul>
        {players.map((item) => (
          <Player key={item._id} {...item} />
        ))}
      </ul>
    </div>
  )
}

function Player({ name, _id, position, price }) {
  return (
    <div className=' mt-4'>
      <div className=' text-yellow-400'>{name}</div>
      <h1 className='text-red-600'>{position}</h1>
      <h1 className=' text-green-700'>${price}M</h1>
      <button>בחר</button>
    </div>
  )
}

export default TeamDetails
