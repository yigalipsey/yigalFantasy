const express = require('express')

// controller functions
const {
  loginUser,
  signupUser,
  test,
} = require('../controllers/userControllers')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.post('/test', test)

module.exports = router
