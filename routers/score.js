const { Router } = require("express");
const score = Router();
const { player } = require("../models");
const { Sequelize } = require("sequelize");
score.get("/:name", async (req, res) => {
  const user = await player.findOne({
    where: { name: req.params.name },
  });
  res.send(user.toJSON());
});
score.get("/", async (req, res) => {
  const userArray = await player.findAll({
    order: [["score", "DESC"]],
  });
  const users = userArray.map((user) => user.toJSON());
  res.send(users);
});

score.put("/:name/add-score", async (req, res) => {
  player.increment("score", { by: 100, where: { name: req.params.name } });
  res.send("player's score updated").status(200);
});
module.exports = score;
