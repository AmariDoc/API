const { query } = require('express');
const pool = require('../../db');
const queries = require('./queries');

//Get ALL Data
const getNBA = (req, res) => {
    pool.query(queries.getNBA,(error, results)=> {
        if(error)throw error;
        res.status(200).json(results.row);
    });
};

//Get NBA By ID
const getNBAById = ( req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getNBAById,[id], (error, results)=> {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}


//Add Basketball
const addBasketball = ( req,res) => {
    const {id, player, team} = req.body;
    pool.query(queries.addBasketball,[id, player, team], (error, results)=> {
        if(error) throw error;
        res.status(200).send("Added New Basketball Stat successfully");
    });
}

//update Nba
const updateNBA =(req,res) => {
    //const id = parseInt(req.params.id);
    const { team, id } = req.body;
    pool.query(queries.updateNBA, [team, id], (error,results) => {
        if(error) throw error;
        res.status(200).send("updated Basketball stats successfully");
    });

}




//Get Data by Param
//Add new Data by Param
//Modify Data by Param

module.exports = {
    getNBA,
    getNBAById,
    addBasketball,
    updateNBA,
};
