const { knex } = require('../../db');
const crypto = require('crypto');

function genRandomToken() {
  return crypto.randomBytes(26).toString('base64');
}
function fetchUsers(){
    return knex.select().table('users')
}

async function userCheck(data){
       return knex.select('').from('users')
        .where({"email":data.email,"password":data.password});

}
async function sessionSaveOrUpdate(user_id,token){
    let dateNow = new Date();
    const sessionData = await knex.select().from('session_store').where({user_id:user_id})
    if(sessionData == ''){
        return knex('session_store').insert({user_id:user_id,token:token,last_login:dateNow})
    }
    return knex('session_store').where({id:user_id}).update({token:token});
}

async function validateUser(cookies){
    console.log(cookies)
}

module.exports = {
    fetchUsers,
    userCheck,
    genRandomToken,
    sessionSaveOrUpdate,
    validateUser
}