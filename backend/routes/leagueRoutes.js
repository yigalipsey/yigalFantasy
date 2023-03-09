const express = require('express')

// controller functions
const {
  getTheLeaguePlayers,
  createLeague,
} = require('../controllers/leagueControllers')

const router = express.Router()

// get all players route
router.get('/allplayers', getTheLeaguePlayers)

// create the league
router.post('/create', createLeague)

module.exports = router
