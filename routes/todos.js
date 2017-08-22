var express = require('express');
var router = express.Router();


var todosController = require('../controllers').todos



/* GET home page. */


router.post('/api',todosController.create)

module.exports = router;
