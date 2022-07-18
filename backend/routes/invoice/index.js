'use strict'
const api = require('./invoice');
const _ = require('lodash');
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const data = await api.invoiceFetch()
    console.log(data)
    return { data: data }
  });

  fastify.get('/bill/:id', async function (request, reply){
    console.log("bill id",request.params.id)
    reply.send({root: "Hello"})
  })

  fastify.post('/new-bill', async function (request, reply){
      const invoiceData = _.pick(request.body,[
        "invoice_id",
        "client_name",
        "status",
        "client_email",
        "invoice_date",
        "invoice_due_date",
        "description",
        "address",
        "city",
        "post_code",
      ]);

      const invoiceItemsData = request.body.bill_items
      return {root: invoiceItemsData}
  })
}
