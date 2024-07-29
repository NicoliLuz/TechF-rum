<<<<<<< HEAD
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
=======
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

>>>>>>> 2fe8ae69d228607713ea5a9d37da5089ce1aabe4
connection.connect(function(err) {
    if(err) {
        throw err;
    } else {
<<<<<<< HEAD
        console.log("MySql conectado!"); /*se der sucesso, exibe a mensagem*/
=======
        console.log("MySql conectado!");
>>>>>>> 2fe8ae69d228607713ea5a9d37da5089ce1aabe4
    }
});

module.exports = connection;