const getNBA = "SELECT * FROM basketball";
const getNBAById = "SELECT * FROM basketball WHERE id = $1";
const addBasketball = "INSERT into basketball (id,player,team) VALUES($1, $2, $3)";
const updateNBA = "UPDATE basketball set team = $1 where id = $2";

module.exports = {
    getNBA,
    getNBAById,
    addBasketball,
    updateNBA
};
