var express = require('express');
var router = express.Router();


var todosController = require('../controllers').todos



/* GET home page. */


router.post('/api/create/',todosController.create)
router.get('/api/index/',todosController.index)
module.exports = router;
