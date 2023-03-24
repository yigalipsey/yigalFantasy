const Team = require('../models/userTeam')
const League = require('../models/leagueModel')
const User = require('../models/userModel')

// Create a new user team
const createMyTeam = async (req, res) => {
  try {
    const newUserTeam = new Team({
      userMail: req.body.userMail,
      teamName: req.body.teamName,
      coachOfTeam: req.body.coachOfTeam,
      players: req.body.team,
      budget: req.body.budget,
      totalPoints: 70,
    })
    const savedUserTeam = await newUserTeam.save()
    const newTeamId = savedUserTeam._id
    console.log('team id ' + newTeamId)
    const result = await User.findOneAndUpdate(
      { email: req.body.userMail },
      { $set: { teamOfUser: newTeamId } },
      { new: true }
    )
    res.status(201).json(savedUserTeam)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error creating myPickedTeam' })
  }
}

//fetch user Team
const FetchMyUserTeam = async (req, res) => {
  try {
    const { userMail } = req.body
    console.log('usermail' + ' ' + userMail)
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

//fetch user picked Team
const FetchAllUsersTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('players')
    res.status(201).json(teams)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
}

const deleteAllUsersTeams = async (req, res) => {
  try {
    const teams = await Team.deleteMany()
    console.log(teams)
    return res.json('deleted')
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
}

module.exports = {
  createMyTeam,
  FetchMyUserTeam,
  FetchAllUsersTeams,
  deleteAllUsersTeams,
}
