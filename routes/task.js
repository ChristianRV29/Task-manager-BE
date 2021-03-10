const { Router } = require('express');
const router = Router();

const { createTask } = require('../controllers/task');

router.get('/test', createTask);

module.exports = router;
