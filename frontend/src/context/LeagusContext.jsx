import { createContext, useReducer } from 'react'

const initialState = {
  mainLeague: [],
}

const leaguesReducer = (state, action) => {
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
  const [state, dispatch] = useReducer(leaguesReducer, initialState)

  // console.log('DataContext state:', state)

  return (
    <LeaguesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LeaguesContext.Provider>
  )
}
