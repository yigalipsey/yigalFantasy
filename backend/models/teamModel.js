const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String },
  logo: { type: String },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  wins: { type: Number },
  losses: { type: Number },
})

module.exports = mongoose.model('teamFantasy', teamSchema)
