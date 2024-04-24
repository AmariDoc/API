const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    user: "adaugh",
    host: "dpg-cok6j8v79t8c73c3s5ng-a",
    database: "nba_fvzr",
    password: "V4MK4RJgSkwsM3zXowhBmTudndN6nlkZ",
    //host: "LocalHost",
    //password:"1234",
    //database: "NBA",
    port: 5432,
});

module.exports = pool;
