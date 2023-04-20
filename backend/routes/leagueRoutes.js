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
router.get('/:_id', requireAuth, getTheLeagueParticipates)

// create the league
router.post('/create', requireAuth, createLeague)

// find  league
router.post('/findleagues', requireAuth, findLeaguesOfUser)

// join user team to league
router.post('/join', requireAuth, joinTeamToLeague)

module.exports = router
