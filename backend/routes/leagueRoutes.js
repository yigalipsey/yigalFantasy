const express = require('express')
const requireAuth = require('../midellware/requireAuth')

// controller functions
const {
  getTheLeagueParticipates,
  findLeaguesOfUser,
  createLeague,
  addTeamToMainLeague,
} = require('../controllers/leagueControllers')

const router = express.Router()

// get all players route
router.get('/:_id', getTheLeagueParticipates)

// create the league
router.post('/create', createLeague)

// create the league
router.post('/findleagues', findLeaguesOfUser)

// add createdTeam user to main league
router.post('/create', addTeamToMainLeague)

module.exports = router
