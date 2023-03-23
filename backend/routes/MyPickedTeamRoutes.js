const express = require('express')
const requireAuth = require('../midellware/requireAuth')

const router = express.Router()

// controller functions
const {
  createMyTeam,
  FetchMyPickedTeam,
  FetchAllUsersPickedTeams,
} = require('../controllers/myPickedTeamControllers')

// create user team
router.post('/create', createMyTeam)

//fetch specific team
router.post('/', FetchMyPickedTeam)

//fetch all teams created by users
router.post('/allusersteams', FetchAllUsersPickedTeams)

module.exports = router
