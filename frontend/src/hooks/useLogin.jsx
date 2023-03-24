import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useMyTeamContext } from './useMyTeamContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch, user } = useAuthContext()
  const { dispatch: dispatchUserTeam } = useMyTeamContext()

  const login = async (email, password) => {
    // console.log(user.userDetails.teamOfUser)
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json })

      // update loading state
      setIsLoading(false)
    }
  }

  const fetchUserTeam = async (email) => {
    const response = await fetch('http://localhost:4000/myteam/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userMail: email }),
    })
    const json = await response.json()
    // console.log(json)
    if (response.ok) {
      // update the auth context
      dispatchUserTeam({ type: 'SET_TEAM', payload: json })

      // update loading state
      setIsLoading(false)
    }
  }

  return { fetchUserTeam, login, isLoading, error }
}
