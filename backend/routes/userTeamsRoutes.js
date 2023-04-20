const express = require('express')
const requireAuth = require('../midellware/requireAuth')

const router = express.Router()

// controller functions
const {
  createMyTeam,
  FetchUserTeamByMail,
  FetchUserTeamById,
  FetchAllUsersTeams,
  deleteAllUsersTeams,
} = require('../controllers/usersTeamControllers')

// create user team
router.post('/create', requireAuth, createMyTeam)

//fetch specific user team by email
router.post('/', requireAuth, FetchUserTeamByMail)

//fetch specific user team by id
router.post('/:_id', requireAuth, FetchUserTeamById)

//fetch all the teams that created by users
router.get('/allusersteams', requireAuth, FetchAllUsersTeams)

//delete all teams created by users
router.delete('/allusersteams', requireAuth, deleteAllUsersTeams)

module.exports = router
