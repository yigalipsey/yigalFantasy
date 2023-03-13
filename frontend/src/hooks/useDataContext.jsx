import { LeagueContext } from '../context/LeagueContext'
import { useContext } from 'react'

export const useDataContext = () => {
  const context = useContext(LeagueContext)

  if (!context) {
    throw Error(
      'useLeagueContext Context must be used inside an LeagueContextContextProvider'
    )
  }

  return context
}
