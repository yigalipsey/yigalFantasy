const Player = require('../models/playerModel')

// Create a new player
const createPlayer = async (req, res) => {
  try {
    const { name, position, price, team, stats } = req.body

    const player = new Player({
      name,
      position,
      price,
      team,
      stats,
    })

    await player.save()

    res.status(201).json(player)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating player' })
  }
}

async function updatePlayerField(req, res) {
  try {
    const { playerId, fieldName, fieldValue } = req.body

    const player = await Player.findById(playerId)
    if (!player) throw new Error('Player not found')

    if (fieldValue) {
      player[fieldName] = fieldValue
      await player.save()
    }

    res.status(200).json(player)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to update player field' })
  }
}

module.exports = { createPlayer, updatePlayerField }
