const { Team } = require('../models/teamModel')
const Player = require('../models/playerModel')

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

//Add a new player to the team
const AddPlyerToTeam = async (req, res) => {
  try {
    const { name, age, position, teamId } = req.body

    const player = new Player({ name, age, position })
    await player.save()

    const team = await Team.findByIdAndUpdate(
      teamId,
      { $push: { players: player._id } },
      { new: true }
    ).populate('players')

    res.status(201).json(team)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
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

// find all teams
async function findAllTeams(req, res) {
  try {
    const teams = await Team.find().populate('players')

    res.status(201).json(teams)
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  createTeam,
  findTeamByName,
  findAllTeams,
  AddPlyerToTeam,
}
