var express = require('express');
var router = express.Router();


var todosController = require('../controllers').todos



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/todos',todosController.create)

module.exports = router;
