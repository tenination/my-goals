var config = require('../knexfile.js');  
var env = 'production';  
var knex = require('knex')(config[env]);


knex.schema.createTableIfNotExists('users', function (table) {
    // TODO: DESCRIBE THE USER TABLE
    table.increments();
    table.string('username');
    table.string('password');

  }).then(function() {
    
knex.schema.createTable('goals', function (table) {
  table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.user_id');
    table.string('title');
    table.string('description');
    table.string('due_date');
    table.string('completed');
  });
});

module.exports = knex;
