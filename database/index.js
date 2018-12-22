

const { Pool } = require('pg')
const pool = new Pool({
  user: 'reviewer',
  database: 'reviews',
});

pool.connect();

module.exports = pool;