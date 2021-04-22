const { Router } = require("express");
const savedQues = Router();
const path = require("path");
const { rating } = require("../models/");
const { Sequelize, Op } = require("sequelize");
const { weightedRandom, getQuesOdds } = require("../utils/utils-genQues");

savedQues.get("/", async (req, res) => {});

module.exports = savedQues;
