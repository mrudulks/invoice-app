'use strict'

const api = require('./users');
const { loginSchema } = require('./schema');
module.exports = async function (fastify, opts) {
  //user
  fastify.get('/', async function( request, reply ){
    const data = await api.fetchUsers();
    console.log(data);
    reply.send({ data:data })
  })

  // Authentication Api 


  fastify.post('/auth', async function (request, reply) {
    let body = request.body;
    const{ value, error } = loginSchema.validate(request.body)
    if(error){
      reply.code(403).send({message:error.details})
      return
    }
    console.log(error)
    const user = await api.userCheck(request.body, reply)
    if(user == ''){
        reply.code(403).send({message:"Invalid Credential"})
        return
    }
    let token = api.genRandomToken();
    let session = await api.sessionSaveOrUpdate(user[0].id,token)
    reply.header('set-cookie',`token=${token};/api`).code(200).send({message:"Login Success"})
  });

  // User Profile Check already loggedin

  fastify.get('/me', async function(request, reply){
    const cookies = request.headers.cookie;
    const validateUser =  api.validateUser(cookies)
    return "User is me"
  });

  // New User Register

  fastify.post('/register', async function (request, reply) {
    console.log(request.body)
    reply.send({message:"hello guys"})
  })
}
