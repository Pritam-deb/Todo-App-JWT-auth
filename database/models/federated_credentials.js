"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FederatedCrendentials extends Model {}
  FederatedCrendentials.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "federated_crendentials",
    }
  );
  return FederatedCrendentials;
};
