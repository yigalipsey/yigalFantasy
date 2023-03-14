import { createContext, useReducer } from 'react'

const initialState = {
  teamName: null,
  coachOfTeam: null,
  team: [],
  budget: 100,
}

function myTeamReducer(state, action) {
  switch (action.type) {
    case 'SET_TEAM_NAME':
      return {
        ...state,
        teamName: action.payload.teamName,
      }
    case 'SET_TEAM_COACH':
      return {
        ...state,
        coachOfTeam: action.payload.coachOfTeam,
      }
    case 'ADD_PLAYER':
      console.log(action.payload.price)
      return {
        ...state,
        team: [...state.team, action.payload],
        budget: state.budget - action.payload.price,
      }
    case 'REMOVE_PLAYER':
      return {
        ...state,
        team: state.team.filter((player) => player.id !== action.payload.id),
        budget: state.budget + action.payload.price,
      }
    default:
      return state
  }
}

export const MyTeamContext = createContext(initialState)

export function MyTeamProvider({ children }) {
  const [state, dispatch] = useReducer(myTeamReducer, initialState)
  console.log('MyTeamContext state:', state)
  return (
    <MyTeamContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MyTeamContext.Provider>
  )
}
