const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teams: [
    {
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MyPickedTeam',
      },
    },
  ],
})

module.exports = mongoose.model('League', leagueSchema)
