

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

// My journal:
// https://docs.google.com/document/d/1hgf2ikPbncwJKQZyVhYVe-OzQse5NFzf69Ii83Kifdc/edit?usp=sharing


// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()