const { Team } = require('../models/teamModel')

// Create a new team
const createTeam = async (req, res) => {
  try {
    const { name, players } = req.body

    const team = new Team({
      name,
      players,
    })

    await team.save()

    res.status(201).json(team)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating team' })
  }
}

// find team by name
async function findTeamByName(req, res) {
  const { name } = req.body
  try {
    const team = await Team.findOne({ name }).populate('players')

    res.status(201).json(team)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { createTeam, findTeamByName }
