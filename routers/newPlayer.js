const { Router } = require("express");
const newPlayer = Router();
const { player } = require("../models");
const { Sequelize } = require("sequelize");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
require("dotenv").config();
const { sign } = require("jsonwebtoken");

newPlayer.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  const userDetail = await player.findOne({ where: { email: email } });
  if (userDetail)
    return res.status(409).send({ message: "user already exists" });

  password = hashSync(password, genSaltSync(10));

  try {
    await player.create({
      name: name,
      score: 0,
      email: email,
      password: password,
    });

    res.send({ message: "user Register Successfuly" }).status(201);
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "could not add new player" });
  }
});

newPlayer.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let loginUser = await player.findOne({ where: { email: email } });
  if (!loginUser) return res.status(403).send("User or password incorrect");

  loginUser = loginUser.toJSON();

  const isPasswordCorrect = compareSync(password, loginUser.password);
  if (!isPasswordCorrect)
    return res.status(403).send("User or password incorrect");

  delete loginUser.password;
  const data = { name: loginUser.name, email, id: loginUser.id };
  const accessToken = sign(data, process.env.JWT_SECRET, {
    expiresIn: "10s",
  });
  const refreshToken = sign(data, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });
  loginUser.refreshToken = refreshToken;
  await player.update({ refreshToken }, { where: { email: loginUser.email } });
  res.status(200).send({
    accessToken,
    score: loginUser.score,
    email: loginUser.email,
    id: loginUser.id,
    name: loginUser.name,
  });
});
module.exports = newPlayer;
