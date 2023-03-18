import { createContext, useReducer } from 'react'

const initialState = {
  teamName: null,
  coachOfTeam: null,
  team: [],
  built: false,
  allReadyPicked: [],
  teamIdArray: [],
  isAvailableToPick: false,
  goalkeeperPlayers: 0,
  defencePlayers: 0,
  midfielderPlayers: 0,
  attackePlayers: 0,
  teamLength: 0,
  budget: 120,
}

function myTeamReducer(state, action) {
  switch (action.type) {
    case 'SET_TEAM':
      return {
        team: action.payload.players,
        coachOfTeam: action.payload.coachOfTeam,
      }
    case 'SET_TEAM_NAME':
      return {
        ...state,
        teamName: action.payload,
      }
    case 'SET_TEAM_COACH':
      return {
        ...state,
        coachOfTeam: action.payload,
      }
    case 'SET_TEAM_SETUP':
      return {
        ...state,
        setup: action.payload,
      }

    case 'ADD_GK':
      // console.log(action.payload.price)
      return {
        ...state,
        team: [...state.team, action.payload],
        allReadyPicked: [...state.team, action.payload],
        budget: state.budget - action.payload.price,
        goalkeeperPlayers: state.goalkeeperPlayers + 1,
        teamLength: state.teamLength + 1,
        teamIdArray: [...state.teamIdArray, action.payload.team],
      }

    case 'ADD_DEFENCE_PLAYER':
      return {
        ...state,
        team: [...state.team, action.payload],
        allReadyPicked: [...state.team, action.payload],
        budget: state.budget - action.payload.price,
        defencePlayers: state.defencePlayers + 1,
        teamLength: state.teamLength + 1,
        teamIdArray: [...state.teamIdArray, action.payload.team],
      }

    case 'ADD_MIDFIELDER_PLAYER':
      return {
        ...state,
        team: [...state.team, action.payload],
        allReadyPicked: [...state.team, action.payload],
        budget: state.budget - action.payload.price,
        midfielderPlayers: state.midfielderPlayers + 1,
        teamLength: state.teamLength + 1,
        teamIdArray: [...state.teamIdArray, action.payload.team],
      }
    case 'ADD_ATTACK_PLAYER':
      return {
        ...state,
        team: [...state.team, action.payload],
        allReadyPicked: [...state.team, action.payload],
        budget: state.budget - action.payload.price,
        attackePlayers: state.attackePlayers + 1,
        teamLength: state.teamLength + 1,
        teamIdArray: [...state.teamIdArray, action.payload.team],
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
