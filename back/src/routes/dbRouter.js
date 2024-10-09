const { Router } = require('express');
const router = Router();

//Criar usuário e Login
const { criarUsuario } = require('../controller/UsuarioController');
const { logarUsuario } = require('../controller/UsuarioController');

//Criar postagens nas páginas menu
const { addComentarioRamificacao } = require('../controller/PostagemController');
const { addComentarioMedia } = require('../controller/PostagemController');
const { addComentarioEmpresa } = require('../controller/PostagemController');
const { addComentarioSkill } = require('../controller/PostagemController');
const { addComentarioAutomacao } = require('../controller/PostagemController');
const { listarComentariosRamificacao } = require('../controller/PostagemController');

router.post('/usuario/criar', criarUsuario);
router.post('/usuario/logar', logarUsuario);

router.post('/post/addComentarioRamificacao', addComentarioRamificacao);
router.post('/post/addComentarioMedia', addComentarioMedia);
router.post('/post/addComentarioEmpresa', addComentarioEmpresa);
router.post('/post/addComentarioSkill', addComentarioSkill);
router.post('/post/addComentarioAutomacao', addComentarioAutomacao);
router.get('/get/listarComentariosRamificacao', listarComentariosRamificacao);

module.exports = router;

/**
 * @swagger
 * escrever aqui...
 */