
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    // TODO: DESCRIBE THE USER TABLE
    table.increments();
    table.string('username');
    table.string('password');

  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
  return knex.schema.dropTable('goals');
};
