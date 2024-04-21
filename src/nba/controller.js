const pool = require('../../db');
const queries = require('./queries');

//Get ALL Data
const getNBA = (req, res) => {
    pool.query(queries.getNBA,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.row);
    });
};

//Get Data by Param
//Add new Data by Param
//Modify Data by Param

module.exports = {
    getNBA,
};
