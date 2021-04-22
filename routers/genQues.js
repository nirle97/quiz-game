const { Router } = require("express");
const genQues = Router();
const path = require("path");
const { questionTemplate } = require("../models/");
const { Sequelize, Op } = require("sequelize");
const { getRandomInt, type1Quest } = require("../utils");

genQues.get("/", async (req, res) => {
  let randomPick = getRandomInt(19);
  const template = await questionTemplate.findOne({
    attributes: ["id", "type", "question", "relevant_coloumn", "desc"],
    where: { id: randomPick },
  });
  type1Quest(template);
  res.send(template);
});

module.exports = genQues;
