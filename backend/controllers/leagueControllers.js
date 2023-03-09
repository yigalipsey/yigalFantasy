const LeagueModel = require('../models/leagueModel')

// get all players
async function getTheLeaguePlayers(req, res) {
  try {
    const league = await LeagueModel.find()
    // .populate('players')
    res.status(201).json(league)
  } catch (err) {
    console.error(err)
  }
}

//create a new league
const createLeague = async (req, res) => {
  const { name, teams } = req.body
  console.log(name)
  try {
    const league = new LeagueModel({
      name,
      teams,
    })

    await league.save()

    res.status(201).json(league)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating league' })
  }
}

module.exports = { getTheLeaguePlayers, createLeague }
