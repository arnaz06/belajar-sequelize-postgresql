var TodoItem = require('../models').TodoItem


module.exports={
  index: function(req,res){
    return TodoItem.all()
    .then(function(todoitem){
      res.status(200).send(todoitem)
    })
    .catch(function(error){
      res.status(404).send(error)
    })
  },
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
