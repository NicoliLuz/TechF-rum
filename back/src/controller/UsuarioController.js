/*Importa a conexão com o BD configurada no arquivo `db.js` dentro da pasta `config`*/
const connection = require('../config/db');

/*Carrega as variáveis de ambiente do arquivo `.env`, permitindo acessar informações */
const dotenv = require('dotenv').config();

// Tabela usuários
async function criarUsuario(request, response) {
    try {
        // Recuperando Formulário
        const params = Array(
            request.body.nome,
            request.body.email,
            request.body.senha,
            request.body.confirmacaoSenha
        );

        /*Confirma se função está sendo chamada*/
        console.log("dentro da api");
        console.log("nome: ", request.body.nome);
        console.log("email: ", request.body.email);
        console.log("senha: ", request.body.senha);
        console.log("confirmacaoSenha: ", request.body.confirmacaoSenha);

        /*Veirifica se senha e confirmação são iguais*/
        if (request.body.senha == request.body.confirmacaoSenha) {

            const query = "INSERT INTO usuarios(nome, email, senha) VALUES(?,?,?)";

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
        } else { /*Se a senha e a confirmação não forem iguais, responde com status 400*/
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Ops, senha e confirmação de senha não iguais!",
                    data: "Ops, senha e confirmação de senha não iguais!",
                })
        }
    } catch (error) { /*Se ocorrer um erro na execução da função, exibe no console*/
        console.log(error);
    }
}

async function logarUsuario(request, response) {
    try {
        // Recuperando Formulário
        const params = Array(
            request.body.email,
            request.body.senha
        );

        /*Confirma se função está sendo chamada*/
        console.log("dentro da api");
        console.log("email: ", request.body.email);
        console.log("senha: ", request.body.senha);

        const query = "SELECT * FROM usuarios where email = ? and senha = ?";

        /*Faz uma consulta no mySQL*/
        connection.query(query, params, (err, results) => {
            console.log(results);
            if (results.length > 0) {
                /*Se o usuário for encontrado, responde com status 200 e mensagem de sucesso*/
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Sucesso!",
                        data: results
                    })
            } else { /*Se não for encontrado, responde com status 400 e mensagem de erro*/
                response
                    .status(400)
                    .json({
                        sucess: false,
                        message: "Usuário/Senha Incorreto",
                        data: err
                    })
            }
        })
    } catch (error) {
        /*Se ocorrer um erro na execução da função, exibe no console*/
        console.log(error);
    }
}

module.exports = {
    criarUsuario,
    logarUsuario
}