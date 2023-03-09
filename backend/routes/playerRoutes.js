const express = require('express')

// controller functions
const { createPlayer } = require('../controllers/playerControllers')

const router = express.Router()

// create player route
router.post('/create', createPlayer)

module.exports = router
