const Team = require('../models/userTeam')
const League = require('../models/leagueModel')
const User = require('../models/userModel')

//random for points
const randomPoints = Math.floor(Math.random() * 100)

// Create a new user team
const createMyTeam = async (req, res) => {
  try {
    const newUserTeam = new Team({
      userMail: req.body.userMail,
      teamName: req.body.teamName,
      coachOfTeam: req.body.coachOfTeam,
      players: req.body.team,
      budget: req.body.budget,
      totalPoints: randomPoints,
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

//fetch user Team by mail
const FetchUserTeamByMail = async (req, res) => {
  try {
    const { userMail } = req.body
    const team = await Team.findOne({ userMail }).populate('players')
    console.log('userMail')
    if (!team) {
      return res.status(404).json({ message: 'Team not found for user.' })
    }

    return res.json(team)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
}

//fetch user Team by id
const FetchUserTeamById = async (req, res) => {
  const teamId = req.params._id
  console.log(teamId)

  try {
    const team = await Team.findOne({ _id: teamId }).populate('players')

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
  FetchUserTeamByMail,
  FetchAllUsersTeams,
  deleteAllUsersTeams,
  FetchUserTeamById,
}
