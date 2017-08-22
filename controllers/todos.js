var Todo = require('../models').Todo

module.exports = {
  create: function (req, res) {
    return Todo.create({
        title: req.body.title
      })
      .then(function (todo) {
        res.status(201).send(todo)
      })
      .catch(error => res.status(400).send(error))

  }
}
