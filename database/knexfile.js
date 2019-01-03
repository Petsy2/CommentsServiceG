module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'reviews',
      user: 'reviewer',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'reviews.c8jj7hoodgm8.us-east-2.rds.amazonaws.com',
      port: 5432,
      database: 'reviews',
      user: 'reviewer',
      password: 'reviewer'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'reviews',
      user: 'reviewer',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
