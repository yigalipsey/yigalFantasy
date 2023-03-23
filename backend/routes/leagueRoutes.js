const express = require('express')
const requireAuth = require('../midellware/requireAuth')

// controller functions
const {
  getTheLeagueParticipates,
  createLeague,
  addTeamToMainLeague,
} = require('../controllers/leagueControllers')

const router = express.Router()

// get all players route
router.post('/mainleague', getTheLeagueParticipates)

// create the league
router.post('/create', createLeague)

// add createdTeam user to main league
router.post('/create', addTeamToMainLeague)

module.exports = router
