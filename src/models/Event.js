const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const PlayerSchema = new mongoose.Schema({

  // nome do evento
  eventName: {
    type: String,
    require: true,
  },
  // nome do criador do evento
  nameAdmin: {
    type: String,
    require: true,
  },
  // nome do board
  boardgame: {
    type: String,
    require: true,
  },
  // localização do evento
  location: {
    type: PointSchema,
    index: '2dsphere'
  },
  // numero de jogadores maximo do evento
  numberOfPlayers: Number,
  // descrição do evento
  description: {
    type: String,
    require: true,
  },
  // regras do evento
  rules: String,
  // restrição a homens === VER COMO UTILIZAR BOOLEANO
  maleRestriction: {
    type: String,
    default: 'N',
  },
  // data de criação do evento
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // data original do evento
  originalDate: Date,
  // data modificada do evento ( caso a data original seja alterada, busca desse campo)
  modifiedDate: Date,
  // data final do evento
  finalDate: Date,
  // nota do evento === VER COMO INCLUIR ARRAY DE NOTAS COM BASE NO NUMERO DE JOGADORES
  rating: Number,
  // feedback do evento
  eventFeedback: String,
})


module.exports = mongoose.model('Player', PlayerSchema)