import { createContext, useReducer } from 'react'

const initialState = {
  players: [],
  loading: true,
  error: null,
}

const leagueReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return {
        ...state,
        players: action.payload,
        loading: false,
        error: null,
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
    default:
      return state
  }
}

export const LeagueContext = createContext(initialState)

export const LeagueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(leagueReducer, initialState)

  return (
    <LeagueContext.Provider value={{ state, dispatch }}>
      {children}
    </LeagueContext.Provider>
  )
}
