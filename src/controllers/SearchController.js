const Player = require('../models/Player')
const ParseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
  async index(req, res) {
    // busca os players no raio de X km
    // filtrar por jogos
    const { latitude, longitude, boardgames } = req.query
    const boardGamesArray = ParseStringAsArray(boardgames)

    const players = await Player.find({
      boardgames: {
        $in: boardGamesArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000, // 10km
        }
      }
    })

    return res.json({ players })
  }
}