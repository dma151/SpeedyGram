const mongoose = require('../db/connection')

const commentSchema = new mongoose.Schema({

})

module.exports = mongoose.model("Comment", commentSchema)