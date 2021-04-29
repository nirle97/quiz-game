"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("players", "email", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("players", "password", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("players", "refreshToken", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("players", "email", Sequelize.STRING);
    await queryInterface.removeColumn("players", "password", Sequelize.STRING);
    await queryInterface.removeColumn(
      "players",
      "refreshToken",
      Sequelize.STRING
    );
  },
};
