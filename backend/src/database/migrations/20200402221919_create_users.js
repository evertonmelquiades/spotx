
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('idUser').primary();
    table.string('session').notNullable();
    table.string('name', 50).notNullable();
    table.string('nick', 15).notNullable();
    table.string('userLogin', 15).notNullable();
    table.string('password', 12).notNullable();
    table.string('number', 9).notNullable();

    table.integer('times').unsigned().notNullable();
    table.foreign('times').references('id').inTable('times');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
