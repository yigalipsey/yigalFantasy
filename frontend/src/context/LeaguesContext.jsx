import { createContext, useReducer } from 'react'

const initialState = {
  mainLeague: [],
}

const leaguesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MAIN_LEAGUE_DATA':
      return {
        ...state,
        mainLeague: action.payload,
      }
    case 'SET_POSITION_TO_FILTER':
      return {
        ...state,
        positionToFilter: action.payload,
      }
    case 'SET_TEAM_TO_FILTER':
      return {
        ...state,
        teamToFilter: action.payload,
      }
    case 'SET_PRICE_TO_FILTER':
      return {
        ...state,
        priceToFilter: action.payload,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
        error: null,
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
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
