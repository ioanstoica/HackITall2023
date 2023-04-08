exports.up = function (knex) {
    try {
    return knex.schema.createTable("matches", function (table) {
      table.increments();
      table.string("id_juc_1").notNullable();
      table.string("id_juc_2").notNullable();
      table.string("fen");
      table.string("data").notNullable();
    });
  } catch (error) {
    logger.error(error);
  }
};

exports.down = function (knex) {
  return knex.schema.dropTable("matches");
};
