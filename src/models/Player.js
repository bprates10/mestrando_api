const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const PlayerSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
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