const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  price: { type: Number, required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  stats: [
    {
      goals: { type: Number },
      assists: { type: Number },
      points: { type: Number },
      lastMatchPoints: { type: Number },
    },
  ],
  info: [
    {
      isRed: { type: Boolean },
      isActive: { type: Boolean },
    },
  ],
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player
