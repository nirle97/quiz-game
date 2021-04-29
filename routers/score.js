const { Router } = require("express");
const score = Router();
const { player } = require("../models");
const { Op } = require("sequelize");
const validToken = require("../utils/utils-auth");

score.get("/", async (req, res) => {
  try {
    const userArray = await player.findAll({
      where: { score: { [Op.gt]: 0 } },
      order: [["score", "DESC"]],
    });
    const users = userArray.map((user) => user.toJSON());
    res.send(users);
  } catch (e) {
    res.send({ error: "could not fetch scoreboard from database" }).status(500);
  }
});

score.put("/add-score", validToken, async (req, res) => {
  try {
    const score = await player.findOne({
      attributes: ["score"],
      where: { id: req.decoded.id },
    });

    if (req.body.score > score.toJSON().score) {
      await player.update(
        { score: req.body.score },
        { where: { id: req.decoded.id } }
      );
      res.send("player's score updated").status(200);
    }
  } catch (e) {
    res.send({ error: "could not increment score" }).status(500);
  }
});

module.exports = score;
