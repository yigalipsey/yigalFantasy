import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emaila, setEmaila] = useState(false)
  const { login, fetchMyTeam, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e)
    await login(email, password)
    // await fetchMyTeam(email)
  }

  const test = () => {
    setEmaila(true)
    console.log(emaila)
  }

  // onChange={(e) => setEmail(e.target.value)}
  //  onChange={(e) => setPassword(e.target.value)}

  return (
    <>
      <form className=' min-h-screen min-w-max  ' onSubmit={handleSubmit}>
        <div className=' py-6  sm:py-12  '>
          <div className='relative py-3 sm:max-w-xl sm:mx-auto w-5/6 mx-auto mt-32 md:mt-20 '>
            <div className='absolute inset-0 bg-gradient-to-tr from-blue to-red shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
            <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
              <div className='max-w-md mx-auto'>
                <div>
                  <h1 className='text-2xl font-semibold'>הכנס אימייל וסיסמא</h1>
                </div>
                <div className='divide-y divide-gray-200'>
                  <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                    <div className='relative'>
                      <input
                        autocomplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                        id='email'
                        name='email'
                        type='email'
                        className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                        placeholder='Email address'
                      />
                    </div>
                    <div className='relative'>
                      <input
                        autocomplete='off'
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        class='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                        placeholder='Password'
                      />
                    </div>
                    <div className='relative'>
                      <button className='bg-black text-white rounded-md px-2 py-1'>
                        היכנס
                      </button>
                      {error && <div className='error'>{error}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </form>
      <h1>kohobb</h1>
      <button className=' w-[100px] bg-black' onClick={test}>
        Press
      </button>
      {emaila && <h1 className=' bg-red w-full'>test</h1>}
    </>
  )
}

export default Login
