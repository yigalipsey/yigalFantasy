const Team = require('../models/myPickedTeam')

// Create a new myTeam
const createMyTeam = async (req, res) => {
  try {
    const newMyPickedTeam = new Team({
      userMail: req.body.userMail, // Assuming the user ID is sent in the request body
      teamName: req.body.teamName,
      coachOfTeam: req.body.coachOfTeam,
      players: req.body.team, // Assuming an array of player IDs is sent in the request body
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
