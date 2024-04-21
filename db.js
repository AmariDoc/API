const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "LocalHost",
    password:"1234",
    database: "NBA",
    port: 5432,
});

module.exports = pool;
