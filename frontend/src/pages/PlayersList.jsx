import useFetchPlayers from '../hooks/useFetchPlayers'

const PlayersList = () => {
  const players = useFetchPlayers()

  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>{player.name}</li>
      ))}
    </ul>
  )
}

export default PlayersList
