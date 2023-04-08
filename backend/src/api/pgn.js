const router = require("express").Router({ mergeParams: true });
const { knex } = require("../services/mysql");

router.get("/pgn", async (req, res) => {
  const pgn = await knex("pgn").select("pgn");
  console.log(pgn);
  res.send(pgn);
});

router.post("/pgn", async (req, res, next) => {
  try {
    const {pgn} = req.body;
    console.log(">>>pgn: ", pgn);
    await knex("pgn").insert({ pgn });
    res.send(pgn);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
