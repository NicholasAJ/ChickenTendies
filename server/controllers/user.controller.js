const User = require('../models/user.models');

const createUser = (req, res) => {
  User.create(req.body)
    .then(newUser => {
      console.log(newUser);
      res.json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
      console.log("###CREATECONTROLLER####")
    });
};


module.exports = {
  createUser
}