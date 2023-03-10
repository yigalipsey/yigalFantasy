const express = require('express')
const requireAuth = require('../midellware/requireAuth')

// controller functions
const {
  getTheLeaguePlayers,
  createLeague,
} = require('../controllers/leagueControllers')

const router = express.Router()

// get all players route
router.post('/allplayers', requireAuth, getTheLeaguePlayers)

// create the league
router.post('/create', createLeague)

module.exports = router
