const { Router } = require("express");
const genQues = Router();
const path = require("path");
const { questionTemplate } = require("../models/");
const { Sequelize, Op } = require("sequelize");
const { getRandomId, QuestionBuilder } = require("../utils/utils-genQues");

genQues.get("/", async (req, res) => {
  let randomId = getRandomId(19);
  const template = await questionTemplate.findOne({
    attributes: ["id", "type", "question", "relevant_coloumn", "desc"],
    where: { id: randomId },
  });
  QuestionBuilder(template);
  res.send(template).status(200);
});

module.exports = genQues;
