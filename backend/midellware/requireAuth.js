const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // Verify user is authenticated
  const { authorization } = req.headers

  // Check if authorization header is present in the request
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  // Extract the token from the authorization header
  const token = authorization.split(' ')[1]

  try {
    // Verify the token and extract the user ID from it
    const { _id } = jwt.verify(token, process.env.SECRET)

    // Find the user in the database by ID and select only the ID field
    req.user = await User.findOne({ _id }).select('_id')

    // Call the next middleware function if user is found
    next()
  } catch (error) {
    console.log(error)
    // Return 401 unauthorized error if token is invalid or user is not found
    res.status(401).json({ error: 'Request is not authorized' })
  }
}

module.exports = requireAuth
