import { createContext, useReducer } from 'react'

const initialState = {
  teams: [],
  positionToFilter: null,
  teamToFilter: null,
  priceToFilter: null,
  loading: true,
  error: null,
}

const leagueReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        teams: action.payload,
        loading: false,
        error: null,
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

export const LeagueContext = createContext(initialState)

export const LeagueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(leagueReducer, initialState)

  console.log('DataContext state:', state)

  return (
    <LeagueContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LeagueContext.Provider>
  )
}
