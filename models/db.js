var config = require('../knexfile.js');  
var env = 'development';  
var knex = require('knex')(config[env]);

 knex.schema.createTableIfNotExists('goals', function (table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.user_id');
    table.string('title');
    table.string('description');
    table.string('due_date');
    table.string('completed');
 });


module.exports = knex;
