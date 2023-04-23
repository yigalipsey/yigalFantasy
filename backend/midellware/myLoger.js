// middleware.js

const myLogger = (req, res, next) => {
  console.log('kara')
  next()
}

module.exports = myLogger
