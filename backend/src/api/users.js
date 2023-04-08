const router = require("express").Router({ mergeParams: true });
const { knex } = require("../services/mysql");

router.get("/users", async (req, res, next) => {
    try {
        const users = await knex("users").select("*");
        res.send(users);
    } catch (error) {
        next(error);
    }
});

router.post("/users", async (req, res, next) => {
    try {
        const { username, password, email } = req.body;
        await knex("users").insert({ username, password, email, elo: 1000 });
        res.send("User created");
    } catch (error) {
        next(error);
    }
});



module.exports = router;
