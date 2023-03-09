const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userControllers')

const router = express.Router()

// get all players route
router.get('/allplayers', loginUser)

module.exports = router
