const authController = require('./controllers/authController')
const guidesController = require('./controllers/guidesController')
const authControllerPolicy = require('./policies/authControllerPolicy')
module.exports = (app) => {

  // Account creation, login, update, view routes
  app.post('/register',
              authControllerPolicy.register,
              authController.register)
  app.post('/login',
              authController.login)


  // Guide creation and management
  app.get('/guides',
              guidesController.index)
  app.post('/guides',
              guidesController.post)
}
