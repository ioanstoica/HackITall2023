require("dotenv").config({ path: `${__dirname}/../.env` });


const { config } = require("./services/mysql");
const knexConfig = {
  client: "mysql",
  connection: config.connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "migrations",
    directory: `${__dirname}/migrations`,
  },
};
module.exports = knexConfig;
