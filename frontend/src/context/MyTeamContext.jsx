import { createContext, useReducer } from 'react'

const initialState = {
  team: [],
  budget: 100,
}

function myTeamReducer(state, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        team: [...state.team, action.payload.player],
        // budget: state.budget - action.payload.player.price,
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
  console.log('PlayerContext state:', state)
  return (
    <MyTeamContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MyTeamContext.Provider>
  )
}
