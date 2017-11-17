
exports.up = function(knex, Promise) {
	return knex.schema.dropTable('goals');
};

exports.down = function(knex, Promise) {
  
};
