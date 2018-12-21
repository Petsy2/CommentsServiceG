exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('user_id');
      table.string('username');
      table.timestamp('account_created').defaultTo(knex.raw('NOW()'));
    }),

    knex.schema.createTable('reviews', function (table) {
      table.increments('review_id');
      table.integer('pet_id');
      table.integer('user_id');
      table.string('review', 10000);
      table.integer('reaction_count');
      table.timestamp('review_created');

      table.foreign('user_id').references('user_id').inTable('users');
    }),

    knex.schema.createTable('reaction_types', function (table) {
      table.increments('reaction_type_id');
      table.string('reaction_type_name');
    }),

    knex.schema.createTable('reactions', function (table) {
      table.increments('reaction_id');
      table.integer('reaction_type_id').notNullable();
      table.integer('review_id').notNullable();
      table.integer('user_id');
      table.timestamp('reaction_date');

      table.foreign('review_id').references('review_id').inTable('reviews');
      table.foreign('user_id').references('user_id').inTable('users');
      table.foreign('reaction_type_id').references('reaction_type_id').inTable('reaction_types');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('reactions'),
    knex.schema.dropTableIfExists('reviews'),
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('reaction_types'),
  ]);
};
