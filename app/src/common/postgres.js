const { Pool } = require('pg');
const config = {
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
  // The rest of the database config needs to be passed in as env variables.
  // See: https://node-postgres.com/features/connecting
}
const pool = new Pool(config);
module.exports = pool;
