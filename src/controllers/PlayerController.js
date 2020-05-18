const Player = require('../models/Player')
const ParseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
  // store new player
  async store(req, res) {
    const {
      name,
      username,
      email,
      password,
      age,
      bio,
      avatar_url,
      boardgames,
      latitude,
      longitude,
      rating,
      level,
      skills,
    } = req.body

    let player = await Player.findOne({ username })

    if (!player) {

      const boardgamesArray = ParseStringAsArray(boardgames)
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      player = await Player.create({
        name,
        username,
        email,
        password,
        age,
        bio,
        avatar_url,
        boardgames: boardgamesArray,
        location,
        rating,
        level,
        skills
      })
    }



    return res.json(player)
  },

  // get all players
  async index(req, res) {
    const players = await Player.find()
    return res.json(players)
  },

  // show one player
  async show(req, res) {
    // const players = await Player.find({ username: username, password: password })
    const players = await Player.find({ username: "Administrador 1" })
    return res.json(players)
  },

  async(req, res) { }
}