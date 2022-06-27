/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('session_store', function(table){
      table.increments('id');
      table.integer('user_id').references('users.id').onDelete('CASCADE');
      table.string('token');
      table.dateTime('last_login').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('session_store');
};
