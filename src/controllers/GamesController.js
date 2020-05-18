const Games = require('../models/Games')

module.exports = {
  async store(req, res) {
    const { name,
      players,
      agemin,
      agemax,
      description,
      game_url,
      category,
      price,
      avaliation } = req.body

    let game = await Games.findOne({ name })

    if (!game) {

      game = await Games.create({
        name,
        players,
        agemin,
        agemax,
        description,
        game_url,
        category,
        price,
        avaliation
      })
    }
    return res.json(game)
  },

  async index(req, res) {
    const games = await Games.find()

    return res.json(games)
  },

  // async(req, res) { }
}