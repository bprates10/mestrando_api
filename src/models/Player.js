const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const PlayerSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  age: Number,
  bio: String,
  avatar_url: String,
  boardgames: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  },
  rating: Number,
  level: Number,
  skills: {
    charisma: Number,
    punctuality: Number,
    education: Number,
    learning: Number,
    hability: Number,
  }
})


module.exports = mongoose.model('Player', PlayerSchema)