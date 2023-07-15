const UserController = require('../controllers/user.controller')

module.exports = (app) => {
  app.put('/user' , UserController.createUser);
  app.get('/getuser', UserController.getUser);
}