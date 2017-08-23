var express = require('express')
var router = express.Router()


var todoItemController = require('../controllers/todoitems')


router.post('/api/:todoId/create/',todoItemController.create)
router.get('/api/',todoItemController.index)

module.exports = router
