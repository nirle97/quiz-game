const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const genQues = require("./routers/genQues");
const savedQues = require("./routers/savedQues");
const score = require("./routers/score");
const rate = require("./routers/rate");
const newPlayer = require("./routers/newPlayer");
app.use(express.json());
app.use(cors());
require("dotenv").config();
// app.use(express.static("./client/build"));
// app.get('/', (request, response) => {
//     response.sendFile((path.join(__dirname, 'client', 'bulid')))
//   })

app.use("/gen-quest", genQues);
app.use("/score", score);
app.use("/saved-quest", savedQues);
app.use("/add-player", newPlayer);
app.use("/rate-quest", rate);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});

module.exports = app;
