const express = require('express')
const requireAuth = require('../midellware/requireAuth')

const router = express.Router()

// controller functions
const {
  createMyTeam,
  FetchMyPickedTeam,
  FetchAllUsersPickedTeams,
  deleteAllUsersPickedTeams,
} = require('../controllers/myPickedTeamControllers')

// create user team
router.post('/create', createMyTeam)

//fetch specific team
router.post('/', FetchMyPickedTeam)

//fetch all teams created by users
router.get('/allusersteams', FetchAllUsersPickedTeams)

//delete all teams created by users
router.delete('/allusersteams', deleteAllUsersPickedTeams)

module.exports = router
