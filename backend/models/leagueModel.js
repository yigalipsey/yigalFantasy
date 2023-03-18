const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
})

module.exports = mongoose.model('League', leagueSchema)
