const { Router } = require('express');
const router = Router();

const { storeUsuario } = require('../controller/UsuarioController');

router.post('/usuario/criar', storeUsuario);

module.exports = router;