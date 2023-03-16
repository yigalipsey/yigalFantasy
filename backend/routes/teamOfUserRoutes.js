const express = require('express')
const requireAuth = require('../midellware/requireAuth')

const router = express.Router()

// create team route
router.post('/create', requireAuth, createTeam)

module.exports = router
