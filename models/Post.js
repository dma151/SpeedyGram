const mongoose = require("../db/connection");

const postSchema = new mongoose.Schema({
  creator: { type: String, required: true },
  image: { data: Buffer, contentType: String },
  caption: {type: String, required: true},
  comments: [{ type: mongoose.Schema.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Post", postSchema);
