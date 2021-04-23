"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("questions", "is_saved", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "questions",
      "is_saved",
      Sequelize.BOOLEAN
    );
  },
};
