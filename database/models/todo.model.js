"use strict";

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { message: "Should not be Empty" },
        },
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      isCompleted: {
        type: DataTypes.STRING, // corrected data type
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  Todo.associate = (models) => {
    Todo.belongsTo(models.user, {
      foreignKey: "userId",
      targetKey: "uuid",
    });
  };

  return Todo;
};
