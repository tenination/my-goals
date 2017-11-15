
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('goals', function (table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.user_id');
    table.string('description');
    table.string('completed');
  });
};

exports.down = function(knex, Promise) {
  
};
