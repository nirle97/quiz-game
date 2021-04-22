const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();
// app.use(express.static("./client/build"));
// app.get('/', (request, response) => {
//     response.sendFile((path.join(__dirname, 'client', 'bulid')))
//   })

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});

module.exports = app;
