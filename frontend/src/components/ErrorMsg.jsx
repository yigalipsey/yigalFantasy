import { useEffect, useState } from 'react'

const ErrorMsg = ({ error }) => {
  const [isVisible, setIsVisible] = useState(true)

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

  return (
    isVisible && (
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg h-[100px] w-1/2 bg-black flex justify-center items-center '>
        {error}
      </div>
    )
  )
}

export default ErrorMsg
