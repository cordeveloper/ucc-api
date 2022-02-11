const express = require('express');
const router = express.Router();
const Player = require('../models/player');


router.get('/', async (req, res) => {
    let players = [];
    try {
        players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/:id', async(req, res) => {
    let player = {};
    try {
        const {id} = req.params;
        player = await Player.findById(id);
        res.status(200).json(player);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', (req, res) => {
   const body = req.body;
   new Player(body).save()
   .then( response => res.status(201).send(response))
   .catch( error => res.status(201).send(error.message));
});

router.put('/:id', async(req, res) => {
    let player = {};
    try {
        const body = req.body;
        const {id} = req.params;
        player = await Player.findByIdAndUpdate(id, body, {new: true});
        res.status(200).json(player);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete('/:id', async(req, res) => {
    let player = {};
    try {
        const {id} = req.params;
        player = await Player.findByIdAndDelete(id);
        res.status(200).json(player);
    } catch (error) {
        res.status(404).send(error.message);
    }
});



module.exports = router;