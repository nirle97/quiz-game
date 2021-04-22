const { Sequelize, Op, REAL } = require("sequelize");
const { countryQuiz } = require("./models/");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const type1Quest = async ({ relevant_coloumn, desc }) => {
  const orderMethod = desc ? "DESC" : "ASC";
  const optionArray = [];
  let i = 0;
  while (i < 4) {
    let randomPick = getRandomInt(243);
    let option = await countryQuiz.findOne({
      attributes: ["Country", relevant_coloumn],
      where: { id: randomPick },
    });
    if (!Object.values(option.toJSON()).includes(null)) {
      optionArray.push(option.toJSON());
      i++;
    }
    console.log(optionArray);
  }
  //   console.log(optionArray);
  //   const answer = await countryQuiz.findAll({
  //   attributes: [country],
  //   where: { country: {[Op.in]: optionArray }},
  //   order: [relevant_coloumn, orderMethod],
  //   limit: 1
  //   });
};

// const type2Quest = function type2Quest() {};
module.exports = { getRandomInt, type1Quest };

// where: {
//     [Op.and]: [
//       { id: randomPick },
//       { relevant_coloumn: { [Op.not]: null } },
//     ],
//   },
// });
