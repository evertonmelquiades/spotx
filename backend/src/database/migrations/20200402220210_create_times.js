
exports.up = function(knex) {
  return knex.schema.createTable('times', function (table){
      table.increments('id').primary();
      table.string('name', 25).notNullable();
      table.string('description', 100).notNullable();
      table.integer('membros').unsigned().notNullable();
      table.string('coach', 15).notNullable(); 

      table.foreign('membros').references('idUser').inTable('users');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('times');
};
