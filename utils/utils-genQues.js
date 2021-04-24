const { Sequelize, Op, REAL } = require("sequelize");
const { countryQuiz } = require("../models");

const getRandomId = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const QuestionBuilder = async ({
  relevant_coloumn,
  desc,
  type,
  id,
  question,
}) => {
  const orderMethod = desc ? "DESC" : "ASC";
  const optionArray = [];
  let i = 0;
  if (type === 3) i = 2;
  while (i < 4) {
    let randomId = getRandomId(243);
    let option = await countryQuiz.findOne({
      attributes: ["Country", relevant_coloumn],
      where: { id: randomId },
    });
    if (
      !Object.values(option.toJSON()).includes(null) &&
      !optionArray.includes(option.toJSON())
    ) {
      optionArray.push(option.toJSON());
      i++;
    }
  }
  const countryNamesArray = optionArray.map((optionObj) => optionObj.Country);
  const questionObj = {
    question_template_id: id,
    question: question,
    country_1: null,
    country_2: null,
    answer: null,
    option_1: null,
    option_2: null,
    option_3: null,
    is_saved: false,
  };
  switch (type) {
    case 1:
      questionObj.answer = await type1Quest(
        relevant_coloumn,
        orderMethod,
        countryNamesArray
      );
      countryNamesArray.splice(
        countryNamesArray.indexOf(questionObj.answer, 0),
        1
      );
      questionObj.option_1 = countryNamesArray[0];
      questionObj.option_2 = countryNamesArray[1];
      questionObj.option_3 = countryNamesArray[2];
      return questionObj;

    case 2:
      questionObj.country_1 = optionArray[0].Country;
      questionObj.answer = optionArray[0][`${relevant_coloumn}`];
      questionObj.option_1 = optionArray[1][`${relevant_coloumn}`];
      questionObj.option_2 = optionArray[2][`${relevant_coloumn}`];
      questionObj.option_3 = optionArray[3][`${relevant_coloumn}`];
      arrangeQuestString(questionObj);
      return questionObj;
    case 3:
      questionObj.country_1 = optionArray[0].Country;
      questionObj.country_2 = optionArray[1].Country;
      questionObj.answer = (await type3Quest(
        relevant_coloumn,
        countryNamesArray,
        orderMethod
      ))
        ? "true"
        : "false";
      questionObj.option_1 = questionObj.answer === "true" ? "false" : "true";
      arrangeQuestString(questionObj);
      return questionObj;
  }
};
const type1Quest = async (relevant_coloumn, orderMethod, countryNamesArray) => {
  const answer = await countryQuiz.findAll({
    attributes: ["Country"],
    where: { country: { [Op.in]: countryNamesArray } },
    order: [[relevant_coloumn, orderMethod]],
    limit: 1,
  });
  return answer[0].toJSON().Country;
};

const type3Quest = async (relevant_coloumn, countryNamesArray, orderMethod) => {
  const answer = await countryQuiz.findAll({
    attributes: ["Country"],
    where: { country: { [Op.in]: countryNamesArray } },
    order: [[relevant_coloumn, orderMethod]],
    limit: 1,
  });
  if (answer[0].toJSON().Country === countryNamesArray[0]) return true;
  return false;
};

function arrangeQuestString(questObj) {
  if (questObj.question.includes("Y")) {
    questObj.question = questObj.question.replace("Y", questObj.country_2);
  }
  if (questObj.question.includes("X")) {
    questObj.question = questObj.question.replace("X", questObj.country_1);
  }
}

module.exports = { getRandomId, QuestionBuilder };
