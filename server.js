const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const teams = [
    { id: 1, name: 'Los Angeles Lakers', coach: 'Frank Vogel' },
    { id: 2, name: 'Golden State Warriors', coach: 'Steve Kerr' }
];

const players = [
    { id: 1, name: 'LeBron James', teamId: 1, position: 'Forward' },
    { id: 2, name: 'Stephen Curry', teamId: 2, position: 'Guard' }
];

const coaches = [
    { id: 1, name: 'Frank Vogel', teamId: 1 },
    { id: 2, name: 'Steve Kerr', teamId: 2 }
];

const matches = [
    { id: 1, homeTeamId: 1, awayTeamId: 2, date: '2024-04-03', result: 'Lakers 98 - Warriors 102' },
    { id: 2, homeTeamId: 2, awayTeamId: 1, date: '2024-04-06', result: 'Warriors 110 - Lakers 105' }
];

// Endpoint for NBA data
app.get('/NBA', (req, res) => {
    res.send('Welcome to the NBA endpoint');
});

// Endpoint to filter players by team name
app.get('/players/team/:teamName', (req, res) => {
    const teamName = req.params.teamName;
    const team = teams.find(team => team.name === teamName);
    if (!team) {
        res.status(404).json({ message: 'Team not found' });
    } else {
        const filteredPlayers = players.filter(player => player.teamId === team.id);
        res.json(filteredPlayers);
    }
});

// Endpoint to update player's position by player id
app.put('/players/:id/position', (req, res) => {
    const playerId = parseInt(req.params.id);
    const newPosition = req.body.position;
    const player = players.find(player => player.id === playerId);
    if (!player) {
        res.status(404).json({ message: 'Player not found' });
    } else {
        player.position = newPosition;
        res.json(player);
    }
});

// Endpoint to add a new team
app.post('/teams', (req, res) => {
    const newTeam = req.body;
    teams.push(newTeam);
    res.status(201).json(newTeam);
});

// Endpoint to add a new player
app.post('/players', (req, res) => {
    const newPlayer = req.body;
    players.push(newPlayer);
    res.status(201).json(newPlayer);
});

// Endpoint to filter coaches by team name
app.get('/coaches/team/:teamName', (req, res) => {
    const teamName = req.params.teamName;
    const team = teams.find(team => team.name === teamName);
    if (!team) {
        res.status(404).json({ message: 'Team not found' });
    } else {
        const filteredCoaches = coaches.filter(coach => coach.teamId === team.id);
        res.json(filteredCoaches);
    }
});

// Endpoint to update coach's name by coach id
app.put('/coaches/:id/name', (req, res) => {
    const coachId = parseInt(req.params.id);
    const newName = req.body.name;
    const coach = coaches.find(coach => coach.id === coachId);
    if (!coach) {
        res.status(404).json({ message: 'Coach not found' });
    } else {
        coach.name = newName;
        res.json(coach);
    }
});

// Endpoint to add a new coach
app.post('/coaches', (req, res) => {
    const newCoach = req.body;
    coaches.push(newCoach);
    res.status(201).json(newCoach);
});

// Endpoint to add a new match
app.post('/matches', (req, res) => {
    const newMatch = req.body;
    matches.push(newMatch);
    res.status(201).json(newMatch);
});

// Endpoint to filter matches by team id
app.get('/matches/team/:teamId', (req, res) => {
    const teamId = parseInt(req.params.teamId);
    const teamMatches = matches.filter(match => match.homeTeamId === teamId || match.awayTeamId === teamId);
    res.json(teamMatches);
});

// Endpoint to update match result by match id
app.put('/matches/:id/result', (req, res) => {
    const matchId = parseInt(req.params.id);
    const newResult = req.body.result;
    const match = matches.find(match => match.id === matchId);
    if (!match) {
        res.status(404).json({ message: 'Match not found' });
    } else {
        match.result = newResult;
        res.json(match);
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
