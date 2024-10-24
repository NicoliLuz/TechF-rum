/*Importa a conexão com o banco de dados configurada no arquivo `db.js` dentro da pasta `config`*/
const connection = require('../config/db');
/*Carrega as variáveis de ambiente do arquivo `.env`, permitindo acessar informações */
const dotenv = require('dotenv').config();

// Add comentários no menu
async function addComentarioRamificacao(request, response) {
    await addComentario(request, response, 'RAMIFICACAO');
}

async function addComentarioMedia(request, response) {
    await addComentario(request, response, 'MEDIA');
}

async function addComentarioEmpresa(request, response) {
    await addComentario(request, response, 'EMPRESA');
}

async function addComentarioSkill(request, response) {
    await addComentario(request, response, 'SKILL');
}

async function addComentarioAutomacao(request, response) {
    await addComentario(request, response, 'AUTOMACAO');
}

async function listarComentariosRamificacao(request, response) {
    await listarComentarios(request, response, 'RAMIFICACAO');
}

// Tabela postagens
function listarComentarios(request, response, pagina) {
    try {
        // Recuperando Formulário
        const params = Array(
            pagina
        );

        /*Confirma se função está sendo chamada*/
        console.log("dentro da api");
        console.log("nome: ", request.body.nome);
        console.log("textoPost: ", request.body.textoPost);

        const query = "SELECT * FROM postagens WHERE pagina = ? ORDER BY datapost DESC LIMIT 50";

        /*Faz uma consulta no mySQL*/
        connection.query(query, params, (err, results) => {
            if (results) { /*Se a inserção for bem-sucedida, responde com status 201 */
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Sucesso!",
                        data: results
                    })
            } else { /*Se ocorrer um erro, responde com status 400 e mensagem de erro*/
                response
                    .status(400)
                    .json({
                        sucess: false,
                        message: "Ops, deu problema!",
                        data: err
                    })
            }
        })
    } catch (error) { /*Se ocorrer um erro na execução da função, exibe no console*/
        console.log(error);
    }
}

// Tabela postagens
function addComentario(request, response, pagina) {
    try {
        // Recuperando Formulário
        const params = Array(
            request.body.nome,
            request.body.textoPost,
            pagina
        );

        /*Confirma se função está sendo chamada*/
        console.log("dentro da api");
        console.log("nome: ", request.body.nome);
        console.log("textoPost: ", request.body.textoPost);

        const query = "INSERT INTO postagens (nome, textoPost, pagina) VALUES(?,?,?)";

        /*Faz uma consulta no mySQL*/
        connection.query(query, params, (err, results) => {
            if (results) { /*Se a inserção for bem-sucedida, responde com status 201 */
                response
                    .status(201)
                    .json({
                        success: true,
                        message: "Sucesso!",
                        data: results
                    })
            } else { /*Se ocorrer um erro, responde com status 400 e mensagem de erro*/
                response
                    .status(400)
                    .json({
                        sucess: false,
                        message: "Ops, deu problema!",
                        data: err
                    })
            }
        })
    } catch (error) { /*Se ocorrer um erro na execução da função, exibe no console*/
        console.log(error);
    }
}

module.exports = {
    addComentarioRamificacao,
    addComentarioMedia,
    addComentarioEmpresa,
    addComentarioSkill,
    addComentarioAutomacao,
    listarComentariosRamificacao
    /**listarComentariosMedia,
    listarComentariosEmpresa,
    listarComentariosSkill,
    listarComentariosAutomacao */

}