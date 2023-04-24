// middleware.js

const myLogger = (req, res, next) => {
  next()
}

module.exports = myLogger
