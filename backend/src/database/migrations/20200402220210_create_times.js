
exports.up = function(knex) {
  return knex.schema.createTable('times', function (table){
      table.increments('id').primary();
      table.string('name', 25).notNullable();
      table.string('description', 100).notNullable();
      table.integer('membros').unsigned(); 
      table.integer('coach').unsigned();

      table.foreign('coach').references('idUser').inTable('users');
      table.foreign('membros').references('idUser').inTable('users');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('times');
};
