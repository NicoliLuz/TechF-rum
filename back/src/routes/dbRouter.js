const { Router } = require('express');
const router = Router();

const { criarUsuario } = require('../controller/UsuarioController');
const { logarUsuario } = require('../controller/UsuarioController');

const { addComentarioRamificacao } = require('../controller/PostagemController');

router.post('/usuario/criar', criarUsuario);
router.post('/usuario/logar', logarUsuario);
router.post('/post/addComentarioRamificacao', addComentarioRamificacao);

module.exports = router;
