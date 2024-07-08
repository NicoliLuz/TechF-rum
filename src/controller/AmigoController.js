const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Tabela amigos
async function adicionarAmigo(request, response) {
    // Recuperando Formulário
    const params = Array(
        request.body.idUsuario,
        request.body.idAmigo,
        "PENDENTE"
    );

    const query = "INSERT INTO amigos(id_usuario, id_amigo, status) VALUES(?,?,?)";

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
}

// Tabela amigos
async function buscarConvites(request, response) {
    // Recuperando Formulário
    const params = Array(
        request.body.idUsuario
    );

    const query = "SELECT id, id_usuario, id_amigo, status FROM amigos WHERE id_amigo = ? AND status = 'PENDENTE'";

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
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
}

// Tabela amigos
async function atualizarStatus(request, response) {
    // Recuperando Formulário
    const params = Array(
        request.body.idUsuario
    );

    const query = "";

    if (request.body.status == "ACEITO") {
        query = "UPDATE amigos SET status = 'ACEITO' where id_amigo = ?";
    } else {
        query = "UPDATE amigos SET status = 'BLOQUEADO' where id_amigo = ?";
    }

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
}


module.exports = {
    adicionarAmigo,
    buscarConvites,
    atualizarStatus
}