const authController = require('./controllers/authController')
const guideController = require('./controllers/guideController')
const authControllerPolicy = require('./policies/authControllerPolicy')
module.exports = (app) => {

  // Account creation, login, update, view routes
  app.post('/register',
              authControllerPolicy.register,
              authController.register)
  app.post('/login',
              authController.login)
  // Guide creation and management
  app.post('/createguide',
              guideController.createGuide)
}
