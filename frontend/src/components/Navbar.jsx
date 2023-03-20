import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useLogout } from '../hooks/useLogot'
import useMediaQuery from '../hooks/useMediaQuery'

// const Navbar = () => {
//   const { logout } = useLogout()
//   const isDesktop = useMediaQuery('(min-width: 768px)')
//   const [isMenuToggled, setIsMenuToggled] = useState(false)

// const handleClick = () => {
//   logout()
// }
//   return (
//     <nav className='bg-gray-900 text-white'>
//       <div className='flex  flex-row-reverse justify-end px-4 py-3'>
// //         <div className='text-right flex  flex-row-reverse'>
// ;<Link to={'/'}>
//   <button onClick={handleClick}>Log out</button>
// </Link>

//           <Link
//             to='/topplayers'
//             className='block px-3 py-2 rounded-md hover:bg-gray-700'
//           >
//             הטובים ביותר
//           </Link>
//           <Link
//             to='buyldteam'
//             className='block px-3 py-2 rounded-md hover:bg-gray-700'
//           >
//             בניית קבוצה
//           </Link>
//           <Link
//             to='/myteam'
//             className='block px-3 py-2 rounded-md hover:bg-gray-700'
//           >
//             הקבוצה שלי
//           </Link>
//           <Link
//             to='/rules'
//             className='block px-3 py-2 rounded-md hover:bg-gray-700'
//           >
//             חוקים
//           </Link>
//         </div>
//         <div>
//           <Link to='/' className='block px-3 py-2 rounded-md hover:bg-gray-700'>
//             Logo
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// {"----------------------------------------------------------------"}

const MyLink = ({ page, selectedPage, setSelectedPage }) => {
  // const lowerCasePage = page.toLowerCase()

  return (
    <Link
      className={`${selectedPage === page ? 'text-yellow' : 'text-white '}
        hover:text-yellow transition duration-500 text-lg`}
      to={`${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </Link>
  )
}

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery('(min-width:768px)')
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <nav
      className={`bg-deep-blue z-40 w-full fixed top-0 py-2  flex  flex-row-reverse `}
    >
      <div className=' flex items-center justify-between mx-auto w-5/6 flex-row-reverse'>
        <h4 className=' font-playfair text-3xl font-bold text-white'>D L</h4>
        {isAboveSmallScreens ? (
          <div className=' flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <MyLink
              page={'Home'}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <MyLink
              page={'Buyldteam'}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link to={'/'}>
              <button className=' text-white' onClick={handleClick}>
                התנתק
              </button>
            </Link>
          </div>
        ) : (
          <button
            className=' rounded-full bg-blue  w-11 h-11'
            onClick={() => {
              setIsMenuToggled(!isMenuToggled)
            }}
          >
            <GiHamburgerMenu className=' text-white mx-auto w-7 h-7' />
          </button>
        )}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
            <div className=' flex justify-end p-8 '>
              <button
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled)
                }}
              >
                <AiFillCloseCircle className=' text-white mx-auto w-11 h-11' />
              </button>
            </div>

            <div className=' flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
              <MyLink
                page={'Home'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <MyLink
                to={'Buyldteam'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
