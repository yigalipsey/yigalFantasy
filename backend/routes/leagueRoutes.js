const express = require('express')
const requireAuth = require('../midellware/requireAuth')

// controller functions
const {
  getTheLeagueParticipates,
  findLeaguesOfUser,
  createLeague,
  joinTeamToLeague,
} = require('../controllers/leagueControllers')

const router = express.Router()

// get all players route
router.get('/:_id', getTheLeagueParticipates)

// create the league
router.post('/create', createLeague)

// find  league
router.post('/findleagues', findLeaguesOfUser)

// join user team to league
router.post('/join', joinTeamToLeague)

module.exports = router
