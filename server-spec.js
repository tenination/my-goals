var test    = require('tape');
var request = require('supertest');
var app     = require('./server.js');

// This is an example test. Use it to write your own endpoint tests below.
test('GET /goals', function (assert) {
  request(app)
    .get('/goals')
    .expect(200)
    .end(function(err, response) {
      assert.error(err);
      assert.equal(response.body,
        'There are no accidents. - Master Oogway',
        "The server should respond with a quote");
      assert.end();
    });
});



// TODO: YOUR TESTS HERE
