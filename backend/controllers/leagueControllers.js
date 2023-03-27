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
async function addTeamToMainLeague(req, res) {
  const team = {
    teamId: req.body.teamId,
  }
  try {
    const mainLeague = await LeagueModel.find({ name: mainLeague })
    mainLeague.teams.push(team)
    await mainLeague.save()
    res.status(201).json(mainLeague)
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

  const teams = await Team.find({ userMail })

  try {
    // Find the league that the user is in, and populate it with teams
    const leagues = await LeagueModel.find({ teams }).populate('teams')

    res.json({ leagues })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports = {
  getTheLeagueParticipates,
  createLeague,
  addTeamToMainLeague,
  findLeaguesOfUser,
}
