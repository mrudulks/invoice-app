/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('invoice_items', function (table) {
        table.increments('id');
        table.integer('invoice_id').references('invoice_to.id').onDelete('CASCADE');
        table.string('item_name');
        table.integer('qty');
        table.float('price');
        table.float('total');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('invoice_items')
};