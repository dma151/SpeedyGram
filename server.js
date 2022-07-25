require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors({
    credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
})