"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  players.init(
    {
      name: DataTypes.STRING,
      score: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      refreshToken: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "player",
      tableName: "players",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return players;
};
