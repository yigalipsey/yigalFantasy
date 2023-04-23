import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useLogout } from '../hooks/useLogot'
import useMediaQuery from '../hooks/useMediaQuery'
import Build from '../images/build.png'
import League from '../images/league.png'
import Team from '../images/team.png'

const MyLink = ({ page, name, selectedPage, setSelectedPage, img }) => {
  const isAboveSmallScreens = useMediaQuery('(min-width:768px)')
  if (!isAboveSmallScreens) {
    return (
      <Link
        className={`${selectedPage === page ? 'text-white' : 'text-black '}
        hover:text-white transition duration-500 text-lg flex justify-between ml-2`}
        to={`${page}`}
        onClick={() => setSelectedPage(page)}
      >
        {name} <img className='w-[30px] ' src={img} />
      </Link>
    )
  } else {
    return (
      <Link
        className={`${
          selectedPage === page ? 'text-emerald-400' : 'text-white '
        }
        hover:text-emerald-400 transition duration-500 text-lg`}
        to={`${page}`}
        onClick={() => setSelectedPage(page)}
      >
        {name}
      </Link>
    )
  }
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
      className={`bg-black z-40 w-full fixed top-0 py-2  flex  flex-row-reverse `}
    >
      <div className=' flex items-center justify-between mx-auto w-5/6 flex-row-reverse'>
        <h4 className=' font-playfair text-xl font-bold text-white'>
          FANTASY LEAGUE
        </h4>
        {isAboveSmallScreens ? (
          <div className=' flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <MyLink
              page={'myteam'}
              name={' הקבוצה שלי '}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <MyLink
              page={'buyldteam'}
              name={'בניית הקבוצה'}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <MyLink
              page={'leagues'}
              name={'ליגות'}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link className='text-lg' to={'/'}>
              <button className=' text-rose-700' onClick={handleClick}>
                התנתק
              </button>
            </Link>
          </div>
        ) : (
          <button
            className=' rounded-full bg-yellow  w-11 h-11'
            onClick={() => {
              setIsMenuToggled(!isMenuToggled)
            }}
          >
            <GiHamburgerMenu className=' text-white mx-auto w-7 h-7' />
          </button>
        )}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 h-full  bg-yellow w-[300px]'>
            <div className=' flex justify-end  p-8 '>
              <button
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled)
                }}
              >
                <AiFillCloseCircle className=' text-black mx-auto w-11 h-11' />
              </button>
            </div>

            <div className=' flex flex-col   ml-[13%] text-2xl pr-4 text-deep-blue'>
              <div className=' border-t border-black pr-3 py-2'>
                <MyLink
                  page={'myteam'}
                  name={' הקבוצה שלי '}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  img={Team}
                />
              </div>
              <div className=' border-t border-black pr-3 py-2'>
                <MyLink
                  page={'buyldteam'}
                  name={'בניית הקבוצה'}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  img={Build}
                />
              </div>
              <div className=' border-t border-black pr-3  py-2 '>
                <MyLink
                  page={'leagues'}
                  name={'ליגות'}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  img={League}
                />
              </div>
              <div className=' border-t border-black  pr-3 py-2'>
                <Link className='text-lg' to={'/'}>
                  <button className=' text-rose-700 ' onClick={handleClick}>
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
