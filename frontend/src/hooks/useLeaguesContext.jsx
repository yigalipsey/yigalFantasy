import { LeaguesContext } from '../context/LeaguesContext'
import { useContext } from 'react'

export const useLeaguesContext = () => {
  const context = useContext(LeaguesContext)

  if (!context) {
    throw Error(
      'useLeaguesContextContext  must be used inside an MyLeaguesProvider'
    )
  }

  return context
}
