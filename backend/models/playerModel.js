const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String },
  price: { type: Number },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  stats: [
    {
      season: { type: String },
      goals: { type: Number },
      assists: { type: Number },
      points: { type: Number },
    },
  ],
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player
