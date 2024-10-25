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
/**
 * @swagger
 * /post/addComentarioRamificacao:
 *   post:
 *    summary: Cria um novo comentário na página Ramificações
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

const { addComentarioMedia } = require('../controller/PostagemController');
/**
 * @swagger
 * /post/addComentarioEmpresa:
 *   post:
 *    summary: Cria um novo comentário na página Empresas
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


const { addComentarioEmpresa } = require('../controller/PostagemController');
/**
 * @swagger
 * /post/addComentarioMedia:
 *   post:
 *    summary: Cria um novo comentário na página Média Salarial
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


const { addComentarioSkill } = require('../controller/PostagemController');
/**
 * @swagger
 * /post/addComentarioSoftSkills:
 *   post:
 *    summary: Cria um novo comentário na página Soft Skills
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


const { addComentarioAutomacao } = require('../controller/PostagemController');
/**
 * @swagger
 * /post/addComentarioAutomacao:
 *   post:
 *    summary: Cria um novo comentário na página Automacao
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


// Listar
const { listarComentariosRamificacao } = require('../controller/PostagemController');
/**
 * @swagger
 * /get/listarComentariosRamificacao:
 *   get:
 *    summary: Lista os comentários na página Ramificacao
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


const { listarComentariosMedia } = require('../controller/PostagemController');
/**
 * @swagger
 * /get/listarComentariosMedia:
 *   get:
 *    summary: Lista os comentários na página Media
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


const { listarComentariosEmpresa } = require('../controller/PostagemController');
/**
 * @swagger
 * /get/listarComentariosEmpresa:
 *   get:
 *    summary: Lista os comentários na página Empresa
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


const { listarComentariosSkill } = require('../controller/PostagemController');
/**
 * @swagger
 * /get/listarComentariosSkill:
 *   get:
 *    summary: Lista os comentários na página Skill
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
const { listarComentariosAutomacao } = require('../controller/PostagemController');
/**
 * @swagger
 * /get/listarComentariosAutomacao:
 *   get:
 *    summary: Lista os comentários na página Automacao
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


router.post('/usuario/criar', criarUsuario);
router.post('/usuario/logar', logarUsuario);

router.post('/post/addComentarioRamificacao', addComentarioRamificacao);
router.post('/post/addComentarioMedia', addComentarioMedia);
router.post('/post/addComentarioEmpresa', addComentarioEmpresa);
router.post('/post/addComentarioSkill', addComentarioSkill);
router.post('/post/addComentarioAutomacao', addComentarioAutomacao);

router.get('/get/listarComentariosRamificacao', listarComentariosRamificacao);
router.get('/get/listarComentariosMedia', listarComentariosMedia)
router.get('/get/listarComentariosEmpresa', listarComentariosEmpresa); 
router.get('/get/listarComentariosSkill', listarComentariosSkill);
router.get('/get/listarComentariosAutomacao', listarComentariosAutomacao);

module.exports = router;

