const LeagueModel = require('../models/leagueModel')

// get all players
async function getTheLeagueParticipates(req, res) {
  try {
    const league = await LeagueModel.find().populate({
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
  const { name } = req.body

  try {
    const newLeague = new LeagueModel({
      name,
      teams: [],
    })

    await newLeague.save()

    res.status(201).json({ message: 'League created successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = { getTheLeagueParticipates, createLeague, addTeamToMainLeague }
