const Player = require('../models/Player')
const ParseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
  // auth user
  async create({ req, auth }) {
    const { username, password } = req.all()

    const token = await auth.attempt(username, password)

    return token
  }
}