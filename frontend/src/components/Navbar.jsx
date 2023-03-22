import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useLogout } from '../hooks/useLogot'
import useMediaQuery from '../hooks/useMediaQuery'

const MyLink = ({ page, name, selectedPage, setSelectedPage }) => {
  return (
    <Link
      className={`${selectedPage === page ? 'text-yellow' : 'text-white '}
        hover:text-yellow transition duration-500 text-lg`}
      to={`${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {name}
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
              page={'myteam'}
              name={' הקבוצה שלי '}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <MyLink
              page={'Buyldteam'}
              name={'בניית הקבוצה'}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <MyLink
              page={'Leagues'}
              name={'ליגות'}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link className='text-lg' to={'/'}>
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

            <div className=' flex flex-col  ml-[33%] text-2xl text-deep-blue'>
              <div className=' border-t py-2'>
                <MyLink
                  page={'myteam'}
                  name={' הקבוצה שלי '}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className=' border-t py-2'>
                <MyLink
                  page={'Buyldteam'}
                  name={'בניית הקבוצה'}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className=' border-t py-2 '>
                <MyLink
                  page={'Leagues'}
                  name={'ליגות'}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className=' border-t py-2'>
                <Link className='text-lg' to={'/'}>
                  <button className=' text-white' onClick={handleClick}>
                    התנתק
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
