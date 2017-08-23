'use strict';

var Todo = require('../models').Todo
module.exports = function(sequelize, DataTypes) {
  var TodoItem = sequelize.define('TodoItem', {
    content:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    todoId: {
      type: DataTypes.INTEGER,

      references:{
        model: Todo,
        key: 'id',
         deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        TodoItem.belongsTo(models.Todo,{
          foreigenKey: 'todoId',
          onDelete: 'CASCADE',
        })
      }
    }
  });
  return TodoItem;
};
