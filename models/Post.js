const mongoose = require("../db/connection");

const postSchema = new mongoose.Schema({
  creator: { type: String, required: true },
  imageUrl: { type: String, required: true},
  caption: {type: String, required: true},
  comments: [{ type: mongoose.Schema.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Post", postSchema);
