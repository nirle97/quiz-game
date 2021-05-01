const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const genQues = require("./routers/genQues");
const savedQues = require("./routers/savedQues");
const score = require("./routers/score");
const newPlayer = require("./routers/newPlayer");
const auth = require("./routers/auth");
app.use(express.json());
app.use(cors());

app.use(express.static("./client/build"));
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "client", "bulid"));
});

app.use("/gen-quest", genQues);
app.use("/score", score);
app.use("/saved-quest", savedQues);
app.use("/users", newPlayer);
app.use("/auth", auth);
app.use("/", (req, res) => {
  res.status(404).send("unknown endpoint");
});
module.exports = app;
