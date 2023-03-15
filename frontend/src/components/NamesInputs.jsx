import React from 'react'

const NamesInputs = () => {
  const stam = async () => {
    console.log('ok')
    const a = 'jnnnk'
    //https://d4fd-31-168-34-130.eu.ngrok.io/user/login
    const response = await fetch('http://localhost:4000/user/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(a),
    })
    const json = await response.json()
  }
  return (
    <div className='flex '>
      <button onClick={stam} className=' mt-10 mr-10 bg-green-600'>
        תנסה
      </button>
    </div>
  )
}

export default NamesInputs
