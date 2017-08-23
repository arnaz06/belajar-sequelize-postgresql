var Todo = require('../models').Todo

module.exports = {
  index: function (req,res) {
    return Todo.all()
    .then(function(todos){
      res.status(200).send(todos)
    })
    .catch(function (error) {
      res.status(400).send(error)
    })
  },
  create: function(req, res) {
    return Todo.create({
        title: req.body.title
      })
      .then(function(todo) {
        res.status(201).send(todo)
      })
      .catch(function(error){
       res.status(400).send(error)
      })

  }
}
