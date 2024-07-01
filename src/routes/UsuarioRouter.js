const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/UsuarioController');

router.post('/store/task', storeTask);

module.exports = router;