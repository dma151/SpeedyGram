const mongoose = require('mongoose');

let mongoURI = '';

// if (process.env.NODE_ENV === 'production') {
// 	mongoURI = process.env.DB_URL;
// } else {
	
// }



mongoose.connect(mongoURI, { useNewUrlParser: true }, { useUnifiedTopology: true }, () => {
	console.log('MongoDB Connected as Local Database');
});

module.exports = mongoose;
