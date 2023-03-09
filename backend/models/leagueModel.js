// league schema
const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
  ],
})

const League = mongoose.model('League', leagueSchema)

module.exports = League
