const requireAdmin = async (req, res, next) => {
  // verify user is an admin
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const userId = decodedToken._id

    const user = await User.findById(userId)
    if (!user) {
      return res.status(401).json({ error: 'Request is not authorized' })
    }

    if (user.role !== 'admin') {
      return res.status(401).json({ error: 'Request is not authorized' })
    }

    req.user = user
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: 'Request is not authorized' })
  }
}

module.exports = requireAdmin
