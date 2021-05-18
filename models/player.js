"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class players extends Model {
    static associate(models) {}
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
