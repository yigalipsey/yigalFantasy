const express = require('express')
const requireAuth = require('../midellware/requireAuth')

const router = express.Router()

// controller functions
const {
  createMyTeam,
  FetchUserTeam,
  FetchAllUsersTeams,
  deleteAllUsersTeams,
} = require('../controllers/usersTeamControllers')

// create user team
router.post('/create', createMyTeam)

//fetch specific user team
router.post('/', FetchUserTeam)

//fetch all the teams that created by users
router.get('/allusersteams', FetchAllUsersTeams)

//delete all teams created by users
router.delete('/allusersteams', deleteAllUsersTeams)

module.exports = router
