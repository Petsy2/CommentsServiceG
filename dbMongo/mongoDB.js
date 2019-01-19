/* eslint-disable camelcase */
const mongoose = require('mongoose');
const port = 27017;
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 3600000,
  socketTimeoutMS: 3600000
};

const db = mongoose.connect('mongodb://localhost/Reviews',
  options
);

mongoose.connection.on('connected', () => {
  console.log(`Success: Database connected to port: ${port}`);
});

mongoose.connection.on('error', () => {
  console.log('Error connecting to database', err);
});

const reviewSchema = new mongoose.Schema({
  review_id: { type: Number },
  pet_id: { type: Number },
  user_id: { type: Number },
  review: { type: String },
  stars: { type: Number },
  review_created: { type: Date }
});
const reviews = mongoose.model('reviews', reviewSchema);



module.exports = {
  reviews, db
};





