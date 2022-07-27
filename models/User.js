const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: String,
  thumbnail: String,
  auth_id: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
});

module.exports = mongoose.model("User", userSchema);
