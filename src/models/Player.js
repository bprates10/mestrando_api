const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const PlayerSchema = new mongoose.Schema({
  // nome
  name: {
    type: String,
    require: true,
  },
  // nickname
  username: {
    type: String,
    unique: true,
    require: true,
  },
  // email
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  // senha
  password: {
    type: String,
    required: true,
    select: false,
  },
  // sexo === SE NÃO ESCOLHIDO DEVERÁ MOSTRAR MENSAGEM QUE A RESTRIÇÃO SERÁ NULA
  gendre: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // idade
  age: Number,
  // biografia
  bio: String,
  // foto avatar
  avatar_url: String,
  // jogos preferidos ou de interesse
  boardgames: [String],
  // localização === VER COMO MOSTRAR A CIDADE COM BASE NA GEOLOCALIZAÇÃO
  location: {
    type: PointSchema,
    index: '2dsphere'
  },
  // ranking do jogador === IMPLEMENTAR VOTAÇÃO DE JOGADORES
  rating: Number,
  // level adquirido
  level: Number,
  // skills ganhas a cada evento
  skills: {
    charisma: Number,
    punctuality: Number,
    education: Number,
    learning: Number,
    hability: Number,
  }
})

module.exports = mongoose.model('Player', PlayerSchema)