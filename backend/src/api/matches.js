const router = require("express").Router({ mergeParams: true });
const { knex } = require("../services/mysql");

router.post("/matches", async (req, res, next) => {
  try {
    await knex("matches").insert({ ...req.body });
    res.send("Match created");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
