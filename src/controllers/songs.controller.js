const Song = require('../models/song.model'); 

const find = async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findById = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        res.json(song);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const create = async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.status(201).json(song);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        await song.update(req.body);
        res.status(204).end();
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        await song.destroy();
        res.status(204).end();
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = { find, findById, create, update, remove };