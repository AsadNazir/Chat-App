const db = require("../db/connection");

const User = require("../models/user.model");

//Handle the Find user  request
const getUserByNameAndPassword = async (req, res) => {
  try {
    const results = await User.find({
      name: req.body.name,
      password: req.body.password,
    });
    res.json({ Error: false, Message: "Success", data: results });
  } catch (error) {
    res.json({ Error: true, Message: error });
  }
};

const addUser = async (req, res) => {
    console.log(req.body.name, req.body.password, req.body.email, req.body.avatar, req.body.status, req.body.created_at, req.body.updated_at);
  try {
    const results = await User.enterUser(
      req.body.name,
      req.body.password,
      req.body.email,
      req.body.avatar,
      req.body.status,
      req.body.created_at,
      req.body.updated_at
    );
    res.json({ Error: false, Message: "Success", data: results });
  } catch (error) {
    res.json({ Error: true, Message: error });
  }
};

const getAllUsers = async (req, res) => {
    try {
        const results = await User.getAllUsers();
        res.json({ Error: false, Message: "Success", data: results });
    } catch (error) {
        res.json({ Error: true, Message: error });
    }
};


module.exports = { getUserByNameAndPassword, addUser, getAllUsers };
