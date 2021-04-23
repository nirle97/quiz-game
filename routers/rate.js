const { Router } = require("express");
const rate = Router();
const { rating } = require("../models");
const { Sequelize } = require("sequelize");

// rate.post("/", async (req, res) => {
//   try {
//     await rating.create({
//       rating: req.body.rate,
//       score: 0,
//     });
//     res.send("player succssufuly added").status(200);
//   } catch (e) {
//     res.status(500).send({ error: "could not add new player" });
//   }
// });

module.exports = rate;
