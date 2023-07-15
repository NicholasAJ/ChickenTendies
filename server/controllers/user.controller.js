const User = require('../models/user.models');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const {username, password, name} = req.body;
  let user  
  User.findOne({username: username}).then(founduser =>{
    user = founduser
  })
  if(user) {
    return res.status(500).json({
      message: "User already exists! Try logging in."
    })
  }
  let passwordHash = bcrypt.hashSync(password, 10);
  console.log(typeof passwordHash);
  const newUser = {
    username: username, 
    password: passwordHash, 
    name: name,
  }
  User.create(newUser)
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


const deleteUser = (req, res) => {
  User.deleteUser({_id: req.params.id})
  .then(deleteConfirmation => {
    console.log(deleteConfirmation);
    res.json(deleteConfirmation);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  });
};

const loginUser = (req,res) => {
  const {username, password} = req.body;
  User.findOne({username: username}).then(user =>{
    if(!user) {
      return res.status(500).json({
        message: "User does not exist."
      })
    }
    const passwordMatch = bcrypt.compareSync(password, user.password)
    console.log(passwordMatch);
    if(!passwordMatch) {
      return res.status(500).json({
        message: "Password does not match"
      })
    };
    return res.json({
      message: "password match",
      value: true
    });
  })
};


module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  loginUser,
}