const config = {
  client: "mysql",
  connection: {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  },
};

const knex = require("knex")(config);

module.exports = { knex, config };
