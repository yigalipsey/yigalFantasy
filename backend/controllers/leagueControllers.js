const LeagueModel = require('../models/leagueModel')
const Team = require('../models/userTeam')

// get all teams in specific league
async function getTheLeagueParticipates(req, res) {
  const leagueId = req.params._id

  try {
    // Find the league with the given ID and populate its 'teams' field with the players of each team
    const league = await LeagueModel.findById(leagueId).populate({
      path: 'teams',
      populate: {
        path: 'players',
      },
    })

    res.status(201).json(league)
  } catch (err) {
    console.error(err)
  }
}

// Async function to add team to a league
async function joinTeamToLeague(req, res) {
  // Get the request data
  const userMail = req.body.userMail
  const leagueId = req.body.leagueId

  try {
    // Find the team with the given userMail and get its id
    const team = await Team.findOne({ userMail })
    const teamId = team._id

    // Find the league by its id
    const league = await LeagueModel.findOne({ _id: leagueId })

    // If league is not found, return 404 error
    if (!league) {
      return res.status(404).send('League not found')
    }

    // Check if team already exists in the league
    if (league.teams.includes(teamId)) {
      return res.status(400).send('Team already exists in the league')
    }

    // Add the team to the league and save the changes
    league.teams.push(teamId)
    await league.save()

    // Return success message
    res.send('Team added to the league')
  } catch (error) {
    // Catch and handle any errors
    console.error(error)
    res.status(500).send('Server error')
  }
}

// create a new league
const createLeague = async (req, res) => {
  const userMail = req.body.userMail

  // Find all teams associated with the given userMail
  const teams = await Team.find({ userMail })

  try {
    const { name } = req.body
    // Create a new league with the given name and teams
    const newLeague = new LeagueModel({
      name,
      teams,
    })

    await newLeague.save()
    const _id = newLeague._id
    res.status(201).json({ _id, message: 'League created successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

// get all leagues of specific user
const findLeaguesOfUser = async (req, res) => {
  const { userMail } = req.body

  // Find the team associated with the given userMail and get its ID
  const teamOfUser = await Team.findOne({ userMail })
  const teamId = teamOfUser._id

  try {
    // Find all leagues that the team with the given ID is associated with, and populate each league's 'teams' field with the players of each team
    const leagues = await LeagueModel.find({ teams: teamId }).populate('teams')

    res.json({ leagues })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports = {
  getTheLeagueParticipates,
  createLeague,
  joinTeamToLeague,
  findLeaguesOfUser,
}
