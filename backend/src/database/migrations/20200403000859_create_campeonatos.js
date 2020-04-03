
exports.up = function(knex) {
  return knex.schema.createTable('campeonatos', function (table) {
      table.increments('idCamp').primary();
      table.string('nome', 50).notNullable();
      table.string('description').notNullable();
      table.integer('numberTimes').notNullable();
      table.string('status').notNullable();
      
      table.integer('times').unsigned();
      table.foreign('times').references('id').inTable('times');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('campeonatos');
};
