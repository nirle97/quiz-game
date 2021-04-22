const { Sequelize, Op, REAL } = require("sequelize");
const { countryQuiz } = require("../models");

const getRandomId = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const QuestionBuilder = async ({ relevant_coloumn, desc, type, id }) => {
  const orderMethod = desc ? "DESC" : "ASC";
  const optionArray = [];
  let i = 0;
  if (type === 3) i = 2; // מקרה קצה לטייפ 3 שימצא לי רק 2 תשובות ולא 4
  while (i < 4) {
    //  מציאת 4 תשובות אפשריות
    let randomId = getRandomId(243);
    let option = await countryQuiz.findOne({
      attributes: ["Country", relevant_coloumn],
      where: { id: randomId },
    });
    if (
      // מוודא שאין NULL ושאין תשובות חוזרות
      !Object.values(option.toJSON()).includes(null) &&
      !optionArray.includes(option.toJSON())
    ) {
      optionArray.push(option.toJSON());
      i++;
    }
  }
  const countryNamesArray = optionArray.map((optionObj) => optionObj.Country);
  const questionObj = {
    // question  האובייקט שמרכבי את השאלה זה מה שיחזור לקליינט וזה מה שבסוף יישמר ב טבלה של ה
    Question_template_id: id,
    Country_1: null,
    Country_2: null,
    Answer: null,
    Option_1: null,
    Option_2: null,
    Option_3: null,
  };
  switch (
    type // מילוי האובייקט לפי הטייפ
  ) {
    case 1:
      questionObj.Answer = await type1Quest(
        relevant_coloumn,
        orderMethod,
        countryNamesArray
      );
      countryNamesArray.splice(
        countryNamesArray.indexOf(questionObj.answer, 0),
        1
      );
      questionObj.Option_1 = countryNamesArray[0];
      questionObj.Option_2 = countryNamesArray[1];
      questionObj.Option_3 = countryNamesArray[2];
      break;

    case 2:
      questionObj.Country_1 = optionArray[0].Country;
      questionObj.Answer = optionArray[0][`${relevant_coloumn}`];
      questionObj.Option_1 = optionArray[1][`${relevant_coloumn}`];
      questionObj.Option_2 = optionArray[2][`${relevant_coloumn}`];
      questionObj.Option_3 = optionArray[3][`${relevant_coloumn}`];
      break;
    case 3:
      questionObj.Country_1 = optionArray[0].Country;
      questionObj.Country_2 = optionArray[1].Country;
      questionObj.Option_1 = true;
      questionObj.Option_1 = false;
      questionObj.Answer = await type3Quest(
        relevant_coloumn,
        countryNamesArray,
        orderMethod
      );
      break;
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
  if (answer[0].toJSON().Country === countryNamesArray[0]) return "true";
  return "false";
};

module.exports = { getRandomId, QuestionBuilder };
