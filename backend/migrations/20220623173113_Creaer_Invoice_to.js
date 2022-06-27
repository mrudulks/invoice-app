/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('invoice_to', function (table) {
        table.increments('id');
        table.string('invoice_id').notNullable();
        table.string('client_name').notNullable();
        table.integer('status').notNullable();
        table.string('client_email').notNullable();
        table.string('invoice_date').notNullable();
        table.string('invoice_due_date').notNullable();
        table.string('description').notNullable();
        table.text('address').notNullable();
        table.string('city').notNullable();
        table.string('post_code').notNullable();
        table.string('updated_by').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('invoice_to');
};