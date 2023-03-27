const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userTeam' }],
})

module.exports = mongoose.model('League', leagueSchema)
