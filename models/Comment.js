const mongoose = require("../db/connection");

const commentSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.ObjectId, ref: "Post" },
  comment: { type: String, required: true },
});

module.exports = mongoose.model("Comment", commentSchema);
