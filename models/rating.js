"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    static associate(models) {}
  }
  rating.init(
    {
      question_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "rating",
      tableName: "ratings",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return rating;
};
