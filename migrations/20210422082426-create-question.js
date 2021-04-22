"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question_template_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      country_1: {
        type: Sequelize.STRING(30),
        primaryKey: true,
      },
      country_2: {
        type: Sequelize.STRING(30),
        primaryKey: true,
      },
      answer: {
        type: Sequelize.STRING(30),
        primaryKey: true,
        allowNull: false,
      },
      option_1: {
        type: Sequelize.STRING(30),
        primaryKey: true,
        allowNull: false,
      },
      option_2: {
        type: Sequelize.STRING(30),
        primaryKey: true,
      },
      option_3: {
        type: Sequelize.STRING(30),
        primaryKey: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("questions");
  },
};
