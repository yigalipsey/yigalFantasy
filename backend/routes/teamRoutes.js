const express = require('express')
const requireAuth = require('../midellware/requireAuth')

// controller functions
const {
  createTeam,
  findTeamByName,
  findAllTeams,
  AddPlyerToTeam,
} = require('../controllers/teamControllers')

const router = express.Router()

// create team route
router.post('/create', requireAuth, createTeam)

//find team by name
router.get('/getteambyname', requireAuth, findTeamByName)

//find all teams
router.get('/allteams', requireAuth, findAllTeams)

//add player to the team
router.post('/addplayer', requireAuth, AddPlyerToTeam)

module.exports = router
