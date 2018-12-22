
const { users, reviews, reaction_types } = require('../fakedata.js');

exports.seed = function (knex, Promise) {
  return (
    knex('reactions').del()
      .then(() => knex('reaction_types').del())
      .then(() => knex('reviews').del())
      .then(() => knex('users').del())
      .then(() => knex('reactions').del())
      .then(() => knex('reaction_types').insert(reaction_types))
      .then(() => knex('users').insert(users))
      .then(() => knex('reviews').insert(reviews))
      // .then(() => knex('reactions').insert(reactions))
      .catch(err => console.log(err))
  );
};
