const { Router } = require("express");
const genQues = Router();
const { questionTemplate } = require("../models/");
const { Sequelize } = require("sequelize");
const { getRandomId, QuestionBuilder } = require("../utils/utils-genQues");

genQues.get("/", async (req, res) => {
  let randomId = getRandomId(19);
  try {
    const template = await questionTemplate.findOne({
      attributes: ["id", "type", "question", "relevant_coloumn", "desc"],
      where: { id: randomId },
    });
    const newQuestion = await QuestionBuilder(template);
    res.send(newQuestion).status(200);
  } catch (e) {
    res.send({ error: "could not generate a new question" }).status(500);
  }
});

module.exports = genQues;
