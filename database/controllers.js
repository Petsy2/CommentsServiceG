const options = require('./knexfile');
const knex = require('knex')(options[process.env.DBOPTIONS || 'development']);

const getReviewsForPet = (pet_id) => {
  return knex.select().from('reviews').where({ pet_id }).leftJoin('users', 'reviews.user_id', 'users.user_id').orderBy('review_created', 'desc');
};

const postReviewForPet = (pet_id, user_id, text) => {
  const review = { pet_id, user_id: null, text } // FIXME: user_id should be fixed in router
  return knex.insert(review).into('reviews');
};

module.exports = {
  knex,
  getReviewsForPet,
  postReviewForPet
}