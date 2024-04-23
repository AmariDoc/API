const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    user: "adaugh",
    host: "dpg-coio130l5elc73daubn0-a",
    database: "nba_hhv1",
    password: "MZrVZm8Nvl9GeO6S1c2cYRHEBLNmbcPR",
    //host: "LocalHost",
    //password:"1234",
    database: "NBA",
    port: 5432,
});

module.exports = pool;
