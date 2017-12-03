const guidesController = require('./controllers/guidesController')
module.exports = (app) => {
  // Guide creation and management
  app.get('/guides',
              guidesController.index)
  app.post('/guides',
              guidesController.post)
}
