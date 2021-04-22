const { Sequelize, Op, REAL } = require("sequelize");
const { countryQuiz, rating } = require("../models");

const getQuesOdds = async () => {
  const dataRating = await rating.findAll({
    attributes: [
      "question_id",
      [Sequelize.fn("AVG", Sequelize.col("rating")), "avgRating"],
    ],
    group: "question_id",
  });
  let sumRatings = 0;
  dataRating.forEach((item) => {
    item = item.toJSON();
    item.avgRating = Math.floor(item.avgRating);
    sumRatings += item.avgRating;
  });
  const quesOdds = {};
  dataRating.forEach((item, i) => {
    item = item.toJSON();
    quesOdds[item.question_id] =
      Math.floor((item.avgRating / sumRatings) * 10) / 10;
  });
  return weightedRandom(quesOdds);
};

function weightedRandom(spec) {
  let i,
    j,
    table = [];
  for (i in spec) {
    for (j = 0; j < spec[i] * 10; j++) {
      table.push(i);
    }
  }
  return table[Math.floor(Math.random() * table.length)];
}
module.exports = { weightedRandom, getQuesOdds };
