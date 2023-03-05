import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='space-y-3'>
      <h1>Welcome to my website!</h1>
      <p>Please choose one of the following:</p>
      <ul className=' space-y-4'>
        <li className='space-y-3'>
          <Link to='/login'>הרשמה</Link>
        </li>
        <li className=' space-y-3 '>
          <Link to='/signup'>כניסה</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
