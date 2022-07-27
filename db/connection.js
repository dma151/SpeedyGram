const mongoose = require('mongoose');

let mongoURI = 'mongodb+srv://generaluser:generaluserpw1@cluster0.yhfw1.mongodb.net/?retryWrites=true&w=majority';

// if (process.env.NODE_ENV === 'production') {
// 	mongoURI = process.env.DB_URL;
// } else {
	
// }



mongoose.connect(mongoURI, { useNewUrlParser: true }, { useUnifiedTopology: true }, () => {
	console.log('MongoDB Connected as Local Database');
});

module.exports = mongoose;
