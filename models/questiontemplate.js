"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questionTemplate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    }
  );
  return questionTemplate;
};
