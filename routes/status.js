const express = require('express');
const router = express.Router();

const { ENV } = process.env;

router.get('/', (req, res) => {
  res.status(200).send({
    status: 200, message: 'Ok!', env: ENV,
  });
});

module.exports = router;
