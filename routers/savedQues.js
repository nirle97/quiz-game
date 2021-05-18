const { Router } = require("express");
const savedQues = Router();
const { Sequelize } = require("sequelize");
const { getQuesOdds } = require("../utils/utils-savedQues");
const { questionTemplate, question, rating } = require("../models");

savedQues.get("/", async (req, res) => {
  try {
    const randomQuestionId = await getQuesOdds();
    const savedQuestion = await question.findOne({
      where: { id: randomQuestionId },
      include: questionTemplate,
    });
    res.send(savedQuestion.toJSON()).status(200);
  } catch (e) {
    console.log(e);
    res.send({ error: "could not fetch a saved question" }).status(500);
  }
});

savedQues.post("/", async (req, res) => {
  const quesToSave = req.body.questObj;
  try {
    if (!quesToSave.is_saved) {
      await question.create({
        question_template_id: quesToSave.question_template_id,
        country_1: quesToSave.country_1,
        country_2: quesToSave.country_2,
        answer: quesToSave.answer,
        option_1: quesToSave.option_1,
        option_2: quesToSave.option_2,
        option_3: quesToSave.option_3,
        is_saved: true,
      });
    }
    let quesToRate = await question.findOne({
      attributes: ["id"],
      where: {
        question_template_id: quesToSave.question_template_id,
        country_1: quesToSave.country_1,
        country_2: quesToSave.country_2,
        answer: quesToSave.answer,
        option_1: quesToSave.option_1,
        option_2: quesToSave.option_2,
        option_3: quesToSave.option_3,
      },
    });
    quesToRate = quesToRate.toJSON();
    await rating.create({
      question_id: quesToRate.id,
      rating: quesToSave.rating,
    });
    res.send("question succssufuly saved").status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: "could not save question" });
  }
});

module.exports = savedQues;
