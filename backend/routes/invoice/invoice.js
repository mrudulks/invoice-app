const { knex } = require('../../db');
function invoiceFetch(){
    return knex.select().table('invoice_items')
}

module.exports = {
    invoiceFetch
}