const { Router } = require("express");
const newPlayer = Router();
const { player } = require("../models");
const { Sequelize } = require("sequelize");

newPlayer.post("/", async (req, res) => {
  try {
    await player.create({
      name: req.body.name,
      score: 0,
    });
    res.send("player succssufuly added").status(200);
  } catch (e) {
    res.status(500).send({ error: "could not add new player" });
  }
});

module.exports = newPlayer;
