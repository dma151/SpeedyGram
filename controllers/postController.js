const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json({posts: posts})
})

router.post('/new', async (req, res) => {
    const post = await Post.create(req.body)
    res.status(201).json({newPost: post})
})

router.update('/:id', async (req, res) => {
    const editPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({editedPost: editPost})
})

router.delete('/:id', async (req, res) => {
    const deletePost = await Post.findByIdAndDelete(req.params.id)
    res.status(204).json("Successfully deleted")
})

module.exports = router