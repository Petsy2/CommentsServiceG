
const supertest = require('supertest');
const { app, server } = require('../server/index');
const { getReviewsForPet, knex } = require('../database/controllers');

describe('Database controller', () => {
  it('should get reviews for a valid pet_id', () => {
    return getReviewsForPet('14128')
      .then(results => {
        expect(results.length).toEqual(3);
        expect(results[1].review).toBe('So furry!');
      });
  });

  it('should fail to get reviews for an invalid pet_id', () => {
    return getReviewsForPet('999999')
      .then(results => {
        expect(Array.isArray(results)).toBeTruthy;
        expect(results.length).toEqual(0);
      });
  });
});



describe('GET /reviews/:pet_id', () => {

  it('should respond with reviews to a GET request for a valid pet_id', async () => {
    const res = await supertest(app).get('/reviews/14128');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveLength(3);
    expect(res.body[1].review).toBe('So furry!');
  });

  it('should have blank response to a GET request for an invalid pet_id', async () => {
    const res = await supertest(app).get('/reviews/999999');
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body).toHaveLength(0);
  });
});

afterAll(() => {
  knex.destroy();
  server.close();
});