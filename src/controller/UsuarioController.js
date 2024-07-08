const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Tabela usuários
async function criarUsuario(request, response) {
    // Recuperando Formulário
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.body.confirmacaoSenha
    );

    console.log("nome: ", request.body.nome);
    console.log("email: ", request.body.email);
    console.log("senha: ", request.body.senha);
    console.log("confirmacaoSenha: ", request.body.confirmacaoSenha);

    if (request.body.senha == request.body.confirmacaoSenha) {

        const query = "INSERT INTO usuarios(nome, email, senha) VALUES(?,?,?)";

        connection.query(query, params, (err, results) => {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: "Sucesso!",
                        data: results
                    })
            } else {
                response
                    .status(400)
                    .json({
                        sucess: false,
                        message: "Ops, deu problema!",
                        data: err
                    })
            }
        })
    } else {
        response
            .status(400)
            .json({
                sucess: false,
                message: "Ops, deu senha e confirmação de senha não iguais!",
                data: "Ops, deu senha e confirmação de senha não iguais!",
            })
    }
}

module.exports = {
    criarUsuario
}