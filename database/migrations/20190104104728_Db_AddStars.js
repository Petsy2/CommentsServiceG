exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('reviews', function (table) {
      table.dropColumn('reaction_count');
      table.integer('stars').defaultTo(5);
    }),

    knex.schema.dropTableIfExists('reactions'),
    knex.schema.dropTableIfExists('reaction_types'),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
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

    knex.schema.alterTable('reviews', function (table) {
      table.dropColumn('stars');
      table.integer('reaction_count').defaultTo(0);
    }),
  ]);
};
