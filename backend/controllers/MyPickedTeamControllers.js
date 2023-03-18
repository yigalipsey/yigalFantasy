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

//fetch user pickedTeam

const FetchMyPickedTeam = async (req, res) => {
  try {
    const { userMail } = req.body
    console.log(userMail)
    const team = await Team.findOne({ userMail }).populate('players')
    console.log(team)
    if (!team) {
      return res.status(404).json({ message: 'Team not found for user.' })
    }

    return res.json(team)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
}

module.exports = { createMyTeam, FetchMyPickedTeam }
