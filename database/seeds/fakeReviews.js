
const { users, reviews, reaction_types } = require('../fakedata.js');

exports.seed = function (knex, Promise) {
  return (
    knex('reviews').del()
      .then(() => knex('users').del())
      .then(() => knex('users').insert(users))
      .then(() => knex('reviews').insert(reviews))
      .catch(err => console.log(err))
  );
};
