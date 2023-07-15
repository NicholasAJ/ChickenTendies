const UserController = require('../controller/UserController');

module.exports = (app) => {
  app.put('/user' , UserController.createUser);
}