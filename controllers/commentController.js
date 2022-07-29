const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/", async (req, res) => {
  const comments = await Comment.find({});
  res.status(200).json({ data: comments });
});

router.get("/:id", async (req, res) => {
  const comment = await Comment.find({ _id: req.params.id });
  res.status(200).json({ data: comment });
});

router.post("/new", async (req, res) => {
  const newComment = await Comment.create(req.body);
  res.status(201).json({ newComment: newComment });
});

router.put("/:id", async (req, res) => {
  const ownerCheck = await Comment.find({ _id: req.params.id });
  if (ownerCheck.email == req.body.email) {
    const editComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ editedComment: editComment });
  } else {
    res.status(400).json("Unauthorized: You are not the creator of this comment");
  }
});

router.delete("/:id", async (req, res) => {
  const ownerCheck = await Comment.find({ _id: req.params.id });
  if (ownerCheck.email == req.body.email) {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json("Successfully deleted");
  } else {
    res.status(400).json("Unauthorized: You are not the creator of this comment");
  }
});

module.exports = router;
