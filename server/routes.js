const authController = require('./controllers/authController')
const guideController = require('./controllers/guideController')

module.exports = (app, Guide) => {

  // Account creation, login, update, view routes
  app.post('/register',
              authController.register)
  // Guide creation and management
  app.post('/createguide',
              guideController.createGuide)
}
