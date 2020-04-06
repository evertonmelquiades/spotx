
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').primary();
    table.string('session');
    table.string('name', 50).notNullable();
    table.string('nick', 15).notNullable();
    table.string('userLogin', 15).notNullable();
    table.string('password', 12).notNullable();
    table.string('number', 9).notNullable();

    table.integer('id_times').unsigned().nullable();
    table.foreign('id_times').references('id').inTable('times');


  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
