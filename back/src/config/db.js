/*Importando os módulos*/
const mysql = require('mysql2'); /*bliblioteca que conecta e interage com o BD mySQL*/
const dotenv = require('dotenv').config(); /*carrega variaveis do .env*/

/*Criando conexão com o BD*/
/*// Cria a conexão com o banco de dados usando o método `createConnection` do pacote mysql2. 
// As informações de conexão (host, user, password, database) são retiradas do arquivo .env através
  do process.env.*/
const connection = mysql.createConnection({
    host: process.env.DB_HOST, /*endereço do servidor*/
    user: process.env.DB_USER, /*nome do usuário*/
    password: process.env.DB_PASSWORD, /*senha*/
    database: process.env.DB_DATABASE /*nome do banco*/
});

/*estabelece a conexão com o banco*/
connection.connect(function(err) {
    if(err) {
        throw err; /*força o código a parar se der erro e mostra-lo*/
    } else {
        console.log("MySql conectado!"); /*se der sucesso, exibe a mensagem*/
    }
});

module.exports = connection;
/*Exporta a conexão para que outros arquivos do projeto possam usar essa conexão com o banco de dados.*/