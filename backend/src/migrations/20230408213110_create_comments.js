exports.up = function (knex) {
  table.increments();
  table.string("id_juc").notNullable();
  table.string("email").notNullable();
  table.string("password").notNullable();
  table.integer("elo").notNullable();
};

exports.down = function (knex) {};
