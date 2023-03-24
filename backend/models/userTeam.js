const mongoose = require('mongoose')

const userTeamSchema = new mongoose.Schema({
  userMail: {
    type: String,
    required: true,
  },
  teamName: { type: String, required: true },
  coachOfTeam: { type: String, required: true },
  budget: { type: Number },
  players: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  ],
  totalPoints: { type: Number, default: 0 },
})

const userTeam = mongoose.model('userTeam', userTeamSchema)

module.exports = userTeam
