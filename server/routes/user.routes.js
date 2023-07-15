const UserController = require('../controllers/user.controller')

module.exports = (app) => {
  app.put('/user' , UserController.createUser);
  app.get('/user/:username', UserController.getUser);
  app.get('/user', UserController.getAllUsers);
  app.delete('/user', UserController.deleteUser);
  app.post('/user/login', UserController.loginUser);
}