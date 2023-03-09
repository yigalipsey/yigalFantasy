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

module.exports = { createPlayer }
