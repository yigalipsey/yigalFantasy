const express = require('express')
const requireAuth = require('../midellware/requireAuth')

// controller functions
const {
  getTheLeagueParticipates,
  createLeague,
} = require('../controllers/leagueControllers')

const router = express.Router()

// get all players route
router.post('/mainleague', getTheLeagueParticipates)

// create the league
router.post('/create', createLeague)

module.exports = router
