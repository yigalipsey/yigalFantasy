const Team = require('../models/myPickedTeam')
const League = require('../models/leagueModel')

// async function addTeamToMainLeague(stringId) {
//   try {
//     const mainLeague = await League.find({ name: 'mainLeague' })
//     console.log(mainLeague)
//     mainLeague.teams.push(stringId)
//     await mainLeague.save()
//     res.status(201).json(mainLeague)
//   } catch (err) {
//     console.error(err)
//   }
// }

// Create a new myTeam
const createMyTeam = async (req, res) => {
  try {
    const newMyPickedTeam = new Team({
      userMail: req.body.userMail,
      teamName: req.body.teamName,
      coachOfTeam: req.body.coachOfTeam,
      players: req.body.team,
    })
    const savedMyPickedTeam = await newMyPickedTeam.save()
    const league = await League.findById('641c3cb871639e68ff98a671')
    console.log(league)
    const team_id = savedMyPickedTeam._id
    const stringId = team_id.toString()
    console.log(stringId)
    league.teams.push('bbkhbk')
    res.status(201).json(savedMyPickedTeam)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error creating myPickedTeam' })
  }
}

//fetch user pickedTeam

const FetchMyPickedTeam = async (req, res) => {
  try {
    const { userMail } = req.body
    console.log(userMail)
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

//fetch user pickedTeam
const FetchAllUsersPickedTeams = async (req, res) => {
  try {
    const teams = await Team.find()
    res.status(201).json(teams)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
}

const deleteAllUsersPickedTeams = async (req, res) => {
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
  FetchMyPickedTeam,
  FetchAllUsersPickedTeams,
  deleteAllUsersPickedTeams,
}
