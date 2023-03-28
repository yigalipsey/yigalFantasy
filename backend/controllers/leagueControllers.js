const LeagueModel = require('../models/leagueModel')
const Team = require('../models/userTeam')

// get all teams in specific league
async function getTheLeagueParticipates(req, res) {
  const leagueId = req.params._id

  try {
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

//add team to league
async function joinTeamToLeague(req, res) {
  const userMail = req.body.userMail
  const leagueId = req.body.leagueId

  try {
    const team = await Team.findOne({ userMail })

    const added = await LeagueModel.updateOne(
      { _id: leagueId },
      { $push: { teams: team } }
    )

    res.status(201).json(added)
  } catch (err) {
    console.error(err)
  }
}

//create a new league
const createLeague = async (req, res) => {
  const userMail = req.body.userMail

  const teams = await Team.find({ userMail })

  try {
    const { name } = req.body
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

//get all leagues of specific user
const findLeaguesOfUser = async (req, res) => {
  const { userMail } = req.body

  const teamOfUser = await Team.findOne({ userMail })
  const teamId = teamOfUser._id
  console.log(teamId)
  try {
    // Find the league that the user is in, and populate it with teams
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
