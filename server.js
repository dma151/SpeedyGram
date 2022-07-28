require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors({
    credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const userController = require('./controllers/userController')
app.use('/users', userController)

const postController = require('./controllers/postController')
app.use('/posts', postController)

const commentController = require('./controllers/commentController')
app.use('/comments', commentController)

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
})