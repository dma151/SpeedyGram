const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
});

module.exports = mongoose.model("User", userSchema);
