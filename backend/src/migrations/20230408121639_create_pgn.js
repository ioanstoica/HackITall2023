
exports.up = function(knex) {
    try {
        return knex.schema.createTable("pgn", function (table) {
          table.increments();
          table.string("pgn").notNullable();
        });
      } catch (error) {
        logger.error(error);
      }
};

exports.down = function(knex) {
    return knex.schema.dropTable("pgn");
};
