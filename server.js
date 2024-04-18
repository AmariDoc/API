const express = require('express');
const nbaRoutes = require('./src/nba/routes');

const app = express();
const port = 8002;

app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Hello Amari');
});

// API Route
app.use('/api/v1/nba', nbaRoutes);

app.listen(port, () => console.log(`running on ${port}`));
