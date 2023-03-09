import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='space-y-3'>
      <h1>אתר הפנטאזי</h1>
      <p>בחר :</p>
      <ul className=' space-x-4'>
        <li className=''>
          <Link to='/login'>כניסה</Link>
        </li>
        <li className=''>
          <Link to='/signup'>הרשמה</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
