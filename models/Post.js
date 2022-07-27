const mongoose = require("../db/connection");

const postSchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.ObjectId, ref: "User" },
  image: { data: Buffer, contentType: String },
  tags: [],
  comments: [{ type: mongoose.Schema.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Post", postSchema);
