const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "LocalHost",
    //host:
    //password:
    database: "NBA",
    port: 5432,
});

module.exports = pool;