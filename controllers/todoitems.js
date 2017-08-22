var TodoItem = require('../models').TodoItem


module.exports={

  create: function(req,res){
    return TodoItem.create({
      content: req.body.content,
      todoId: req.params.todoId
    })
    .then(function(todoitem){
      res.status(201).send(todoitem)
    })
    .catch(function(error){
      res.status(400).send(error)
    })
  }
}
