const router = require('express').Router({ mergeParams: true });
const { knex } = require('../services/mysql');

router.get('/api/pgn', async (req, res) => {
   const pgn = await knex('pgn').select('pgn');
   console.log(pgn);
   res.send(pgn);
});

router.post('/pgn', async (req, res) => {
   const pgn = req.body;
   await knex('pgn').insert({ pgn });
   res.send(pgn);
});
