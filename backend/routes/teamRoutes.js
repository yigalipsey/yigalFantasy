const express = require('express')

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
router.get('/allteams', findAllTeams)

//add player to the team
router.post('/addplayer', AddPlyerToTeam)

module.exports = router
