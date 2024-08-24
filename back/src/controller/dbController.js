// Importa a conexão com o banco de dados que foi configurada no arquivo `db.js` 
// dentro da pasta`config`.
const connection = require('../config/db');

// Carrega as variáveis de ambiente do arquivo `.env` (configura ligação com banco)
const dotenv = require('dotenv').config();

 // Tabela usuários
async function storeTask(request, response) {
   // Recuperando Formulário
    const params = Array(
        request.body.title, /*Nome do usuário*/
        request.body.description, /*Gmail*/
        request.body.senha /*Senha*/
    );

    const query = "INSERT INTO usuarios(nome, email, senha) VALUES(?,?,?)";

    /*Executa a consulta SQL com os parâmetros que foram extraídos do formulário*/
    connection.query(query, params, (err, results) => {        
        if(results) { /*se for sucesso...*/
            response
             .status(201) /*Define o status HTTP 201, que indica que algo foi criado com sucesso*/
             .json({      /*Envia uma resposta em formato JSON com a mensagem de sucesso*/
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else { /*se der erro...*/
            response
             .status(400) /*Define o status HTTP 400, que indica uma solicitação inválida*/
             .json({
                sucess: false,
                message: "Ops, deu problema!",
                data: err
            })
        }
    })
}


 // Tabela postagens 
async function storeTask(request, response) {
    // Recuperando Formulário
     const params = Array(
         request.body.title, 
         request.body.description,
         request.body.datapost
     );
 
     const query = "INSERT INTO postagens(titulo, informacoes, datapost) VALUES(?,?,?)";
 
     connection.query(query, params, (err, results) => {        
         if(results) {
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


  // Tabela mensagens 
async function storeTask(request, response) {
    // Recuperando Formulário
     const params = Array(
         request.body.title, 
         request.body.description
     );
 
     const query = "INSERT INTO mensagens(informacoes, datamensagem) VALUES(?,?)";
 
     connection.query(query, params, (err, results) => {        
         if(results) {
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


 // Tabela categorias 
async function storeTask(request, response) {
    // Recuperando Formulário
     const params = Array(
         request.body.title, 
         request.body.description
     );
 
     const query = "INSERT INTO categorias(titulo, informacoes) VALUES(?,?)";
 
     connection.query(query, params, (err, results) => {        
         if(results) {
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
    storeTask
}