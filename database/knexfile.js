const { devdb } = require('./secrets');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: devdb.dbname,
      user: devdb.dbuser,
      password: devdb.dbpassword
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
      host: process.env.DBHOST,
      port: process.env.DBPORT,
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD
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
