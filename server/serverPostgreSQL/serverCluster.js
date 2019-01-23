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

  app.get('/reviews/:review_id', async (req, res, next) => {
    let review_id = req.params.review_id;
    try {
      let entry = await knex.select().from('reviews').where({ review_id });
      res.status(200).send(entry);
    } catch (err) {
      // next(e);
      // console.log('ERROR', err);
      res.status(500).send('Err retrieving review')
    }
  });

  app.post('/reviews/:review_id', async (req, res, next) => {

    let reviewItem = { review: req.body.review };
    let review_id = req.params.review_id;
    try {
      await knex('reviews').where({ review_id }).update(reviewItem).into('reviews');
      res.status(201).send('Review posted');
    } catch (e) {
      next(e);
      res.status(500).send('Error: posting review');
    }
  });

  app.listen(port, console.log(`Worker ${cluster.worker.id} running and is listening on port ${port}`));

}