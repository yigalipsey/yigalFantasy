const Team = require('../models/myPickedTeam')

// Create a new myTeam
const createMyTeam = async (req, res) => {
  console.log('backend')
  try {
    const newMyPickedTeam = new Team({
      user: req.body.user, // Assuming the user ID is sent in the request body
      teamName: req.body.teamName,
      players: req.body.players, // Assuming an array of player IDs is sent in the request body
      // ... other fields for myPickedTeam
    })
    const savedMyPickedTeam = await newMyPickedTeam.save()
    res.status(201).json(savedMyPickedTeam)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error creating myPickedTeam' })
  }
}

module.exports = { createMyTeam }
