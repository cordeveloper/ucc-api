const mongoose = require('mongoose');
const {Schema} = mongoose;

const playerSchema = new Schema({
    name: String,
    position: {
        type: String,
        enum: ['portero', 'defensa', 'centrocampista', 'delantero']
    }, 
    number: {
        type: Number,
        unique: true
    }
});

const Player = mongoose.model('Player', playerSchema);


module.exports = Player;