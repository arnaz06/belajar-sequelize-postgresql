'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    allowNull: true,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.hasMany(models.TodoItem,{
          foreigenKey: 'todoId',
          as: 'todoItems'
        })
      }
    }
  });
  return Todo;
};
