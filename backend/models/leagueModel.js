const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  leagueCode: {
    type: Number,
    // required: true,
  },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MyPickedTeam' }],
})

module.exports = mongoose.model('League', leagueSchema)
