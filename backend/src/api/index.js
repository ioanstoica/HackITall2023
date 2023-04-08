const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.all("*", (req, _res, next) => {
//   req.namespace = req.originalUrl.replace(/\/(api|users)/g, "");
//   next();
// });

app.use("/api", require("./users"));
app.use("/api", require("./matches"));

module.exports = app;
