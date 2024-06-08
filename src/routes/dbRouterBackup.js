const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/dbController');

router.post('/store/task', storeTask);

module.exports = router;