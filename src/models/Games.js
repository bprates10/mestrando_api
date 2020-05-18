const mongoose = require('mongoose')

const GamesSchema = new mongoose.Schema({
  name: String,
  players: String,
  agemin: Number,
  agemax: Number,
  description: String,
  game_url: String,
  category: String,
  price: String,
  avaliation: Number,
})


module.exports = mongoose.model('Games', GamesSchema)