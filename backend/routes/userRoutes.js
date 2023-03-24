const express = require('express')

// controller functions
const {
  loginUser,
  signupUser,
  deleteAllUsers,
} = require('../controllers/userControllers')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.delete('/allusers', deleteAllUsers)

module.exports = router
