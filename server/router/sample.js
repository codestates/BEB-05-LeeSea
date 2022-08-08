const router = require('express').Router();
const sampleController = require('../controller/sample');

router.get('/', sampleController.get);

module.exports = router;
