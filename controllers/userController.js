const express = require("express");
const router = express.Router();
const User = require("../models/User");

// router.get('/:id', async (req, res) => {

// })

router.post("/new", async (req, res) => {
  const userCheck = await User.find({ email: req.body.email });
  if (userCheck.length == 0) {
    const newUser = await User.create(req.body);
    res.status(201).json({ newUser: newUser });
  }
});

router.update("/:id", async (req, res) => {
  const editUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ editedUser: editUser });
});

router.delete("/:id", async (req, res) => {
  const deleteUser = await User.findByIdAndDelete(req.params.id);
  res.status(204).json("User deleted");
});

module.exports = router;
