const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class countryQuiz extends Model {
    static associate(models) {}
  }
  countryQuiz.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Country: DataTypes.STRING,
      Capital: DataTypes.STRING,
      Continent: DataTypes.STRING,
      Restaurant_Price_Index: DataTypes.FLOAT,
      Cost_of_Living_Index: DataTypes.FLOAT,
      Phones_per_1000: DataTypes.STRING,
      Crime_Index: DataTypes.FLOAT,
      Safety_Index: DataTypes.FLOAT,
      Health_Care_Index: DataTypes.FLOAT,
      Area_km2: DataTypes.INTEGER,
      Population: DataTypes.INTEGER,
      Density_popkm2: DataTypes.INTEGER,
      Price_To_Income_Ratio: DataTypes.FLOAT,
      Quality_of_Life_Index: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "countryQuiz",
      tableName: "country_quiz",
      createdAt: "created_at",
      updatedAt: "updated_at",
      underscore: true,
    }
  );
  return countryQuiz;
};
