#!/usr/bin/env node
require("dotenv").config();

const config = require("./knexfile");
const knex = require("knex")(config);
knex.migrate.latest().then(function () {
  // always exit the infrastructure process to swith from the initContainer to the main container
  process.exit();
});
