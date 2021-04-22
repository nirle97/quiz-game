const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class countryQuiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
      Restaurant_Price_Index: DataTypes.DECIMAL,
      Cost_of_Living_Index: DataTypes.DECIMAL,
      Phones_per_1000: DataTypes.STRING,
      Crime_Index: DataTypes.DECIMAL,
      Safety_Index: DataTypes.DECIMAL,
      Health_Care_Index: DataTypes.DECIMAL,
      Area_km2: DataTypes.STRING,
      Population: DataTypes.STRING,
      Density_popkm2: DataTypes.STRING,
      Price_To_Income_Ratio: DataTypes.DECIMAL,
      Quality_of_Life_Index: DataTypes.DECIMAL,
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
