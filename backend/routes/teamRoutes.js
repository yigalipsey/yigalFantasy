const express = require('express')
const requireAuth = require('../midellware/requireAuth')
const myLogger = require('../midellware/myLoger')

// controller functions
const {
  createTeam,
  findTeamByName,
  findAllTeams,
  AddPlyerToTeam,
} = require('../controllers/teamControllers')

const router = express.Router()

// create team route
router.post('/create', createTeam)

//find team by name
router.get('/getteambyname', findTeamByName)

//find all teams
router.get('/allteams', requireAuth, findAllTeams)

//add player to the team
router.post('/addplayer', AddPlyerToTeam)

module.exports = router
