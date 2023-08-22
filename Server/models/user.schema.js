const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  status: String,
  created_at: String,
  updated_at: String,
});

const User = mongoose.model("User", userSchema);

// Create the unique index on the 'email' field
User.collection.createIndex({ email: 1 }, { unique: true });

module.exports = User;
