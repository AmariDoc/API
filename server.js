const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


const players = [
    { id: 1, name: 'LeBron James', team: 'Los Angeles Lakers', position: 'Forward' },
    { id: 2, name: 'Stephen Curry', team: 'Golden State Warriors', position: 'Guard' },
    
];

// Route to retrieve all basketball players
app.get('/players', (req, res) => {
    res.json(players);
});

// Route to retrieve a specific player by ID
app.get('/players/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const player = players.find(p => p.id === id);
    if (!player) {
        res.status(404).json({ message: 'Player not found' });
    } else {
        res.json(player);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
