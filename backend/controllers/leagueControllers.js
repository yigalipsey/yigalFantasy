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

//create a new league
const createLeague = async (req, res) => {
  const { name, users } = req.body

  try {
    const newLeague = new League({
      name,
      users,
    })

    await newLeague.save()

    res.status(201).json({ message: 'League created successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = { getTheLeagueParticipates, createLeague }
