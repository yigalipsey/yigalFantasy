import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e)
    await login(email, password)
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3 className=' flex flex-co mb-10'>Log In</h3>
      <div className=' w-full'>
        <label>מייל</label>
        <input
          className='mb-10'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className=' w-full'>
        <label>סיסמא</label>
        <input
          className='mb-10'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className=' w-full'>
        <button className=' mt-10 mr-10 bg-green-600' disabled={isLoading}>
          Log in
        </button>
        {error && <div className='error'>{error}</div>}
      </div>
    </form>
  )
}

export default Login
