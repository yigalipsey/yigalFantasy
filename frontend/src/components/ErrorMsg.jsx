import { useEffect, useState } from 'react'

const ErrorMsg = ({ error, error1, error2, error3, error4 }) => {
  const [isVisible, setIsVisible] = useState(true)

  console.log(error + '0', error1 + '1')

  const handleHide = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (!isVisible) {
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [isVisible])

  return isVisible && error === undefined ? (
    <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[140px] w-1/2 bg-black gap-5 flex justify-center items-center flex-col '>
      <div>{error1}</div>
      <div>{error2}</div>
      <div>{error3}</div>
      <div>{error4}</div>
    </div>
  ) : (
    isVisible && error !== undefined && (
      <div className='z-14 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[220px] w-1/2 bg-black gap-5 flex justify-center items-center  '>
        <div>{error}</div>
      </div>
    )
  )
}

export default ErrorMsg
