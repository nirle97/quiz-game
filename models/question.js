"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  question.init(
    {
      question_template_id: DataTypes.INTEGER,
      country_1: DataTypes.STRING(30),
      country_2: DataTypes.STRING(30),
      answer: DataTypes.STRING(30),
      option_1: DataTypes.STRING(30),
      option_2: DataTypes.STRING(30),
      option_3: DataTypes.STRING(30),
    },
    {
      sequelize,
      modelName: "question",
      tableName: "questions",
    }
  );
  return question;
};
