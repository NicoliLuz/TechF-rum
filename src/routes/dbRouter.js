const { Router } = require('express');
const router = Router();

const { criarUsuario } = require('../controller/UsuarioController');

const { adicionarAmigo } = require('../controller/AmigoController');
const { buscarConvites } = require('../controller/AmigoController');
const { atualizarStatus } = require('../controller/AmigoController');

//const { postarMensagem } = require('../controller/MensagemController');
//const { postarConversa } = require('../controller/ConversaController');

router.post('/usuario/criar', criarUsuario);
router.post('/amigo/adicionar', adicionarAmigo);
router.get('/amigo/buscarConvites', buscarConvites);
router.put('/amigo/atualizarStatus', atualizarStatus);

module.exports = router;
