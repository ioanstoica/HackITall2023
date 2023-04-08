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

router.get("/matches/:id_juc", async (req, res, next) => {
  try {
    const id_juc_1 = req.params.id_juc;
    console.log("id_juc_1: ", id_juc_1);
    const matches = await knex("matches").where({ id_juc_1 });
    console.log("Matches: ", matches);
    res.send(matches);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
