const express = require('express')

// controller functions
const { createTeam, findTeamByName } = require('../controllers/teamControllers')

const router = express.Router()

// create team route
router.post('/create', createTeam)

//find team by name
router.get('/getteambyname', findTeamByName)

module.exports = router
