/* Tests to write:
That get returns expected pet info
That get to a non-pet_id returns an error
That a post puts a new review in the db
That a post put into a db is returned by the next get
  Those four: for the controllers, then for the routes
*/

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

afterAll(() => knex.destroy());
