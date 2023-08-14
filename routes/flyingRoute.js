
const express = require('express');
const router = express.Router();
const fareController = require('../controllers/fares');

router.get('/', fareController.getFare);

module.exports = router;