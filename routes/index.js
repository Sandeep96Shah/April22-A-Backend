const express = require('express');
const router = express.Router();

const ourFirstController = require('../controller/index');

router.get('/', ourFirstController.home);

router.get('/hello-world', ourFirstController.helloWorld);

module.exports = router;