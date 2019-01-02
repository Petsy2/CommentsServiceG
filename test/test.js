// var assert = require('assert');

// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

/* Tests to write:
That get returns expected pet info
That get to a non-pet_id returns an error
That a post puts a new review in the db
That a post put into a db is returned by the next get
  Those four: for the controllers, then for the routes
*/

const should = require('chai').should();
const assert = require('chai').assert;

describe('Testing tests', function () {
  it('should run a test', function () {
    assert.equal(4, 1 + 3);
  })
});
