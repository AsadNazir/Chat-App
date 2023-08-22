const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const secretKey = "ILOVEHER";

const login = async (req, res) => {
  console.log(secretKey);
  const user = await userModel.getUserByEmailAndPassword(
    req.body.email,
    req.body.password
  );

  if (user.length === 0)
    return res
      .status(401)
      .json({ Error: true, Message: "Invalid credentials" });

  const token = jwt.sign({ id: user[0]._id }, secretKey, {
    expiresIn: "24h",
  });

  res.json({
    Error: false,
    Message: "Success",
    data: { token: token, user: user[0] },
  });
};

const verify = async (req, res, next) => {
  let token = req.header("Authorization");

  if (!token)
    return res.status(401).json({ Error: true, Message: "Invalid token" });

  token = token.replace("Bearer ", "");
};

const register = async (req, res) => {};

module.exports = { login, register,};
