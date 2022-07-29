const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");

router.get("/", async (req, res) => {
  const posts = await Post.find({}).populate("comments");
  res.status(200).json({ posts: posts });
});

router.post("/new", async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json({ newPost: post });
});

router.put("/:id", async (req, res) => {
  const editPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ editedPost: editPost });
});

router.delete("/:id", async (req, res) => {
  const deletePost = await Post.findByIdAndDelete(req.params.id);
  res.status(204).json("Successfully deleted");
});

// Add new comment to current post
router.put(":id/addComment", async (req, res) => {
  const comment = await Comment.find({ _id: req.body.commentId });
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    {
      $push: { comments: comment._id },
    },
    { new: true }
  ).populate("comments");
  res.status(201).json({ data: post });
});

module.exports = router;
