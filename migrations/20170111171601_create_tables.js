exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTableIfNotExists('users', function (table) {
    // TODO: DESCRIBE THE USER TABLE
    table.increments();
    table.string('username');
    table.string('password');

  }),
  knex.schema.createTableIfNotExists('goals', function (table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.user_id');
    table.string('description');
    table.string('iscompleted');

  })]);

};

exports.down = function(knex, Promise) {
  // TODO: DROP OTHER TABLES

  return knex.schema.dropTable('users');
  return knex.schema.dropTable('goals');

};
