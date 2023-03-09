const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String },
  logo: { type: String },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
})

const Team = mongoose.model('Team', teamSchema)

module.exports = { Team }
