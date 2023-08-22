const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

route.post("/register", userController.addUser);
route.post("/login", auth.login);
route.get("/all", userController.getAllUsers);

route.post("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = route;
