const LeagueModel = require('../models/leagueModel')
const Team = require('../models/userTeam')

// get all players
async function getTheLeagueParticipates(req, res) {
  const { id } = req.body
  try {
    const league = await LeagueModel.findById(id).populate({
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

module.exports = { getTheLeagueParticipates, createLeague, addTeamToMainLeague }
