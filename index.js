const express = require('express');
const app = express();
const port = 3000;
const connection = require('./connection.js');

app.use(express.json());

connection();

// Routes
const player = require('./routes/player');

app.use('/api/player', player);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});