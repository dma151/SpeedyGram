const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema({

})

module.exports = mongoose.model("Post", postSchema)