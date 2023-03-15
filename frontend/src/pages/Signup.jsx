import { useState } from 'react'
import { useSignup } from '../hooks/useSignUp'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className=' space-x-10' onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className=' mb-10'>
        <label>Email address:</label>
        <input
          className=' bg-gray-500'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className=' mb-10'>
        <label>Password:</label>
        <input
          className=' bg-gray-500'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className=' mb-10'>
        <button disabled={isLoading}>Sign up</button>
        {error && <div className='error'>{error}</div>}
      </div>
    </form>
  )
}

export default Signup
