import { DataContext } from '../context/DataContext'
import { useContext } from 'react'

export const useDataContext = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw Error(
      'useLeagueContext Context must be used inside an LeagueContextContextProvider'
    )
  }

  return context
}
