const { usernames } = require('./fakedata.js');

const { Pool } = require('pg')
const pool = new Pool({
  user: 'reviewer',
  database: 'reviews',
});

// dbConnect = async () => {
//   await pool.connect();
// }
// dbConnect();
pool.connect();

dbSeed = async (usernames) => {
  let first, rest;
  if (usernames.length) {
    [first, ...rest] = usernames;
  } else {
    return null;
  }
  const query = `INSERT INTO users (username, account_created) VALUES ('${first}', NOW());`;
  try {
    await pool.query(query);
  }
  catch (err) {
    console.log(err);
  }
  return dbSeed(rest);
}

dbSeed(usernames);


// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()