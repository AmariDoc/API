const express = require('express');
const app = express();
const nbaRoutes = require('./src/nba/routes');

app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const port = 8500;



app.get('/', (req, res) => {
    res.send('Hello Amari');
});

// API Route
app.use('/api/v1/nba', nbaRoutes);

app.listen(port, () => console.log(`running on ${port}`));
