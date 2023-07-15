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

const getAllUsers = (req, res) => {
  User.find({})
  .then(allUsers => {
    console.log(allUsers);
    res.json(allUsers);
    })
    .catch (err => {
      console.log(err);
      res.json,(400).json(err);
    })
}

const getUser = (req, res) => {
  User.findOne({_id: req.params.id})
  .then(oneUser => {
    console.log(oneUser);
    res.json(oneUser);
  })
  .catch(err => {
    res.json(400).json(err);
  });
};


module.exports = {
  createUser,
  getAllUsers,
  getUser,
}