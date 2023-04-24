const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const userDetails = await User.findOne({ email: email })
    const teamOfUser = userDetails.teamOfUser
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token, teamOfUser, _id: userDetails._id })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const signupUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)
    const teamOfUser = user.teamOfUser
    const _id = user._id

    // create a token
    const token = createToken(user._id)

    res.status(200).json({ email, token, teamOfUser, _id })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteAllUsers = async (req, res) => {
  try {
    const teams = await User.deleteMany()
    return res.json('deleted')
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
}

module.exports = { signupUser, loginUser, deleteAllUsers }
