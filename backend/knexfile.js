// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 require('dotenv').config();
 module.exports = {
 
   development: {
     // client: 'sqlite3',
     // connection: {
     //   filename: './dev.sqlite3'
     // }
     client: 'pg',
     connection: {
       host : '127.0.0.1',
       port : 5432,
       user : process.env.DB_USER,
       password : process.env.DB_PASSWORD,
       database : process.env.DB_DATABASE
     },
   },
 
   staging: {
     client: 'postgresql',
     connection: {
       database: 'my_db',
       user:     'username',
       password: 'password'
     },
     pool: {
       min: 2,
       max: 10
     },
     migrations: {
       tableName: 'knex_migrations'
     }
   },
 
   production: {
     client: 'postgresql',
     connection: {
       database: 'my_db',
       user:     'username',
       password: 'password'
     },
     pool: {
       min: 2,
       max: 10
     },
     migrations: {
       tableName: 'knex_migrations'
     }
   }
 
 };
 