const express = require('express')
const requireAuth = require('../midellware/requireAuth')

const router = express.Router()

// controller functions
const { createMyTeam } = require('../controllers/myPickedTeamControllers')

// create team route
router.post('/create', createMyTeam)

module.exports = router