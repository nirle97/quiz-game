const { Router } = require("express");
const score = Router();
const { player } = require("../models");
const { Sequelize } = require("sequelize");

score.get("/get-player/:id", async (req, res) => {
  const user = await player.findOne({
    where: { id: req.params.id },
  });
  if (!user) return res.send({ error: "no such user" }).status(400);
  console.log(user.toJSON());
  res.send(user.toJSON()).status(200);
});

score.get("/", async (req, res) => {
  try {
    const userArray = await player.findAll({
      order: [["score", "DESC"]],
    });
    const users = userArray.map((user) => user.toJSON());
    res.send(users);
  } catch (e) {
    res.send({ error: "could not fetch scoreboard from database" }).status(500);
  }
});

score.put("/:id/add-score", async (req, res) => {
  try {
    player.increment("score", { by: 100, where: { id: req.params.id } });
    res.send("player's score updated").status(200);
  } catch (e) {
    res.send({ error: "could not increment score" }).status(500);
  }
});

module.exports = score;
