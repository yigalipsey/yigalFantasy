import { createContext, useReducer } from 'react'

const initialState = {
  mainLeague: [],
  allLeaguesIn: [],
  specificLeague: [],
}

const leaguesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MAIN_LEAGUE_DATA':
      return {
        ...state,
        mainLeague: action.payload,
      }
    case 'SET_USER_LEAGUE_DATA':
      return {
        ...state,
        allLeaguesIn: action.payload,
      }
    case 'SET_SPECIFIC_LEAGUE_DATA':
      return {
        ...state,
        specificLeague: action.payload,
      }
  }
}

export const LeaguesContext = createContext(initialState)

export const LeaguesProvider = ({ children }) => {
  const [state, dispatchLeague] = useReducer(leaguesReducer, initialState)

  // console.log('LeagueContext state:', state)

  return (
    <LeaguesContext.Provider value={{ ...state, dispatchLeague }}>
      {children}
    </LeaguesContext.Provider>
  )
}
