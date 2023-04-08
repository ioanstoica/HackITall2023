const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.all("*", (req, _res, next) => {
  req.namespace = req.originalUrl.replace(/\/(api|pgn)/g, "");
  next();
});

app.use("/api", require("./pgn"));

module.exports = app;
