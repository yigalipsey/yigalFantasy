import { MyTeamContext } from '../context/MyTeamContext'
import { useContext } from 'react'

export const useMyTeamContext = () => {
  const context = useContext(MyTeamContext)

  if (!context) {
    throw Error(
      'useMyTeamContext  must be used inside an MyTeamContextProvider'
    )
  }

  return context
}
