import { LeaguesContext } from '../context/LeaguesContext'
import { useContext } from 'react'

export const useLeaguesContext = () => {
  const context = useContext(MyTeamContext)

  if (!context) {
    throw Error(
      'useLeaguesContextContext  must be used inside an MyLeaguesProvider'
    )
  }

  return context
}
