require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const playerRoutes = require('./routes/playerRoutes')
const leagueRoutes = require('./routes/leagueRoutes')
const MyPickedTeamRoutes = require('./routes/MyPickedTeamRoutes')
const teamRoutes = require('./routes/teamRoutes')
const cors = require('cors')

// express app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/user', userRoutes)
app.use('/player', playerRoutes)
app.use('/team', teamRoutes)
app.use('/league', leagueRoutes)
app.use('/myteam', MyPickedTeamRoutes)

// connect to db
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
