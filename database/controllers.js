const knex = require('knex');
const pool = require('index');

const getReviewsForPet = async (pet_id) => {
  const query = knex.select('review').from('reviews').where({ pet_id });
  return pool.query(query);
};

const postReviewForPet = (pet_id, user_id, review) => {
  const review = { pet_id, user_id: null, review } // FIXME: user_id should be fixed in router
  const query = knex.insert(review).into('reviews');
  return pool.query(query);
};

module.exports = {
  getReviewsForPet,
  postReviewForPet
}