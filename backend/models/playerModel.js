const mongoose = require('mongoose')

//schema for Players
const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  price: { type: Number, required: true },
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

module.exports = mongoose.model('playerFantasy', playerSchema)
