"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("questions_templates", [
      {
        type: 1,
        question: "Which country is most populous?",
        desc: true,
        relevant_coloumn: "Population",
      },
      {
        type: 1,
        question: "Which country is least populous?",
        desc: false,
        relevant_coloumn: "Population",
      },
      {
        type: 1,
        question: "Which country is the largest by total area?",
        desc: true,
        relevant_coloumn: "Area_km2",
      },
      {
        type: 1,
        question: "Which country is the smallest  by total area?",
        desc: false,
        relevant_coloumn: "Area_km2",
      },
      {
        type: 1,
        question: "Which country is the most densely populated?",
        desc: true,
        relevant_coloumn: "Density_popkm2",
      },
      {
        type: 1,
        question: "Which country is the least  densely populated?",
        desc: false,
        relevant_coloumn: "Density_popkm2",
      },
      {
        type: 1,
        question: "Which country has the most cell phones per person?",
        desc: true,
        relevant_coloumn: "Phones_per_1000",
      },
      {
        type: 1,
        question: "Which country has the most Health Care rate?",
        desc: true,
        relevant_coloumn: "Health_Care_Index",
      },
      {
        type: 1,
        question: "Which country is the most Safest?",
        desc: true,
        relevant_coloumn: "Safety_Index",
      },
      {
        type: 1,
        question: "Which country has the least cost of living?",
        desc: false,
        relevant_coloumn: "Cost_of_Living_Index",
      },
      {
        type: 2,
        question: "What is the capital of X?",
        desc: false,
        relevant_coloumn: "Capital",
      },
      {
        type: 2,
        question: "How many people live in X?",
        desc: false,
        relevant_coloumn: "Population",
      },
      {
        type: 2,
        question: "In what continent is X?",
        desc: false,
        relevant_coloumn: "Continent",
      },
      {
        type: 3,
        question: "Are there more people in X than in Y?",
        desc: false,
        relevant_coloumn: "Population",
      },
      {
        type: 3,
        question: "Is X larger than Y?",
        desc: false,
        relevant_coloumn: "Area_km2",
      },
      {
        type: 3,
        question: "Does X have a higher population density than Y?",
        desc: false,
        relevant_coloumn: "Density_popkm2",
      },
      {
        type: 3,
        question:
          "Is the quality of life in X higher than the quality of life in Y?",
        desc: false,
        relevant_coloumn: "Quality_of_Life_Index",
      },
      {
        type: 3,
        question: "Is the crime rate of X higher than the crime rate in Y?",
        desc: false,
        relevant_coloumn: "Crime_Index",
      },
      {
        type: 3,
        question: "Are restaurants in X more expensive than restaurants in Y?",
        desc: false,
        relevant_coloumn: "Restaurant_Price_Index",
      },
      {
        type: 3,
        question: "Are Price To Income Ratio in X is more greater then in Y?",
        desc: false,
        relevant_coloumn: "Price_To_Income_Ratio",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questions_templates");
  },
};
