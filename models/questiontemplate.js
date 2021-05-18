"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questionTemplate extends Model {
    static associate(models) {
      this.hasMany(models.question, {
        foreignKey: "question_template_id",
      });
    }
  }
  questionTemplate.init(
    {
      type: DataTypes.INTEGER,
      question: DataTypes.STRING,
      relevant_coloumn: DataTypes.STRING,
      desc: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "questionTemplate",
      tableName: "questions_templates",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return questionTemplate;
};
