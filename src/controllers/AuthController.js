const express = require('express')
const Player = require('../models/Player')

module.exports = {
  // auth user
  async index(req, res) {

    console.log('body =>', req.body)
    return 'end'
    const {
      username,
      password
    } = req.all()

    console.log(username, password)

    const player = await (await Player.findOne({
      username
    })).isSelected('+password')

    if (!player)
      return res.status(400).send({
        error: 'user not found'
      })


    return res.send(player)

    // const token = await auth.attempt(username, password)

    // return token
  }
}