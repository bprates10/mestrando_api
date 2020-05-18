const { Router } = require('express')
const PlayerController = require('./controllers/PlayerController')
const SearchController = require('./controllers/SearchController')
const GamesController = require('./controllers/GamesController')

const routes = Router()

// add
routes.post('/players', PlayerController.store)
// listar
routes.get('/players', PlayerController.index)
// show onem player
routes.post('/showplayer', PlayerController.show)
// buscar players de acordo com latitude e longitute
routes.get('/search', SearchController.index)
// add boardgames
routes.post('/games', GamesController.store)
// list games
routes.get('/games', GamesController.index)

// testes
routes.get('/', (req, res) => {
  return res.json({
    'message': 'mensagem get'
  })
})

routes.post('/', (req, res) => {
  return res.json({
    'message': 'mensagem post'
  })
})

module.exports = routes