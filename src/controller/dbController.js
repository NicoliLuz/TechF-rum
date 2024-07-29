const connection = require('../config/db');
const dotenv = require('dotenv').config();

 // Tabela usuários
async function storeTask(request, response) {
   // Recuperando Formulário
    const params = Array(
        request.body.title, 
        request.body.description,
        request.body.senha
    );

    const query = "INSERT INTO usuarios(nome, email, senha) VALUES(?,?,?)";

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