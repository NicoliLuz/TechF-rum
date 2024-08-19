/*Importando os módulos*/
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

/*Criando conexão com o BD*/
const connection = mysql.createConnection({
    host: process.env.DB_HOST, /*endereço do servidor*/
    user: process.env.DB_USER, /*nome do usuário*/
    password: process.env.DB_PASSWORD, /*senha*/
    database: process.env.DB_DATABASE /*nome do banco*/
});

/*estabelece a conexão com o banco*/
connection.connect(function(err) {
    if(err) {
        throw err;
    } else {
        console.log("MySql conectado!"); /*se der sucesso, exibe a mensagem*/
    }
});

module.exports = connection;