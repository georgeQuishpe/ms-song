const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songs.controller');

router.get('/', songsController.find);
router.get('/:id', songsController.findById);
router.post('/', songsController.create);
router.put('/:id', songsController.update);
router.delete('/:id', songsController.remove);

module.exports = router;