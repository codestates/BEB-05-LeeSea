const express = require('express');
const router = express.Router();
const sampleRouter = require('./sample');

router.use('/sample', sampleRouter);

module.exports = router;
