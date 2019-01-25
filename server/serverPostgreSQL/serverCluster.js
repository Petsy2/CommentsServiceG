/* eslint-disable camelcase */
const cluster = require('cluster');
const knex = require('../../dbpostgreSQL/knex.js');
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan'); 

if (cluster.isMaster) {
  let cpus = require('os').cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.id} exited, respawning...`);
    cluster.fork();
  });

} else {
  const express = require('express');
  const app = express();
  let port = 5000;
  let counter = 10000 + Math.round(Math.random() * 10000);

  //////Middleware//////
  app.use((error, req, res, next) => {
    res.json({ message: error.message });
  });
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.static('public'));

  // app.use(morgan('dev'));

  /////Routes//////////
  app.get('/', (req, res) => {
    if (counter-- === 0) {
      cluster.worker.disconnect();
    }
    res.send('Application running!');
  });

  app.get('/reviews/:review_id', wrapAsync(async (req, res, next) => {
    let review_id = req.params.review_id;
    try {
      let entry = await knex.raw(`SELECT * FROM reviews WHERE review_id= ${review_id}`);
      res.status(200).send(entry.rows);
    } catch (err) {
      next(err);
      res.status(500).send('Error: Unable to get review');
    }
  }));

  app.post('/reviews/:review_id', wrapAsync(async (req, res, next) => {

    let reviewItem = { review: req.body.review };
    let review_id = req.params.review_id;
    try {
      // await knex('reviews').where({ review_id }).update(reviewItem).into('reviews');
      await knex.raw(`UPDATE reviews SET review = '${reviewItem.review}' WHERE review_id =${review_id}`);
      res.status(201).send('Success: Review posted!');
    } catch (e) {
      next(e);
      res.status(500).send('Error: posting review');
    }
  }));

  app.listen(port, console.log(`Worker ${cluster.worker.id} running and is listening on port ${port}`));
}

function wrapAsync(fn) {
  return function (req, res, next) {
    // Make sure to `.catch()` any errors and pass them along to the `next()`
    // middleware in the chain, in this case the error handler.
    fn(req, res, next).catch(next);
  };
}