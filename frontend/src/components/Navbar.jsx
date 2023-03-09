import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { useLogout } from '../hooks/useLogot'
import useMediaQuery from '../hooks/useMediaQuery'

const Navbar = () => {
  const { logout } = useLogout()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [isMenuToggled, setIsMenuToggled] = useState(false)

  const handleClick = () => {
    logout()
  }
  return (
    <nav className='bg-gray-900 text-white'>
      <div className='flex  flex-row-reverse justify-end px-4 py-3'>
        <div className='text-right flex  flex-row-reverse'>
          <Link to={'/'}>
            <button onClick={handleClick}>Log out</button>
          </Link>

          <Link
            to='/topplayers'
            className='block px-3 py-2 rounded-md hover:bg-gray-700'
          >
            הטובים ביותר
          </Link>

          <Link
            to='/myteam'
            className='block px-3 py-2 rounded-md hover:bg-gray-700'
          >
            הקבוצה שלי
          </Link>
          <Link
            to='/rules'
            className='block px-3 py-2 rounded-md hover:bg-gray-700'
          >
            חוקים
          </Link>
        </div>
        <div>
          <Link to='/' className='block px-3 py-2 rounded-md hover:bg-gray-700'>
            Logo
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
