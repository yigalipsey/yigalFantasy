const mongoose = require('mongoose')

const myPickedTeamSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  teamName: { type: String, required: true },
  players: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  ],
  // ... other myPickedTeam fields
})

const myPickedTeam = mongoose.model('MyPickedTeam', myPickedTeamSchema)

module.exports = myPickedTeam
