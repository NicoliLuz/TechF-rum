const { Router } = require('express');
const router = Router();

//Criar usuário 
const { criarUsuario } = require('../controller/UsuarioController');
/**
 * @swagger
 * /usuario/criar:
 *   post:
 *    summary: Cria/cadastra um novo usuario
 *    responses:
 *      201:
 *        description: Sucesso!
 *      400:
 *        description: Ops, deu problema! 
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *              itens:
 *                 type: object
 */


//Login usuário 
const { logarUsuario } = require('../controller/UsuarioController');
/**
 * @swagger
 * /usuario/logar:
 *   post:
 *    summary: Loga um usuario ja cadastrado
 *    responses:
 *      200:
 *        description: Sucesso!
 *      400:
 *        description: Usuário/Senha Incorreto
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *              itens:
 *                 type: object
 */


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

