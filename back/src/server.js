/*importando os módulos*/
const express = require('express'); /*importa o Express, um framework para criar servidores web*/
const http = require('http'); /*importa o módulo HTTP nativo do Node.js*/
const { Server } = require('socket.io'); /*importa o Socket.io para comunicação em tempo real */

class App {
    constructor() { /*Importa o módulo CORS para permitir que o navegador faça requisições de diferentes origens*/
        const cors = require('cors');

        this.app = express(); /*cria o servidor web usando Express*/
        this.app.use(cors()); /*permite que o servidor aceite requisições de diferentes origens*/
        this.app.use(express.json()); /*faz o servidor entender dados no formato JSON*/
        this.http = http.createServer(this.app); /*cria um servidor HTTP que usa o servidor web do Express*/
        this.io = require("socket.io")(this.http, { /*configura o Socket.io para comunicação em tempo real*/
            cors: {
                // permite o browser fazer requisições da porta 5500 por causa do live server
                origin: "http://127.0.0.1:5500",
                methods: ["GET", "POST", "PUT", "DELETE"]
            }
        });
        this.listenSocket(); /*configura o Socket.io para lidar com conexões e mensagens*/
        this.setupRoutes(); /*configura as rotas para servir arquivos e responder a requisições*/

        this.app.use(express.static('front')); /*Define a pasta 'front' para servir arquivos estáticos como HTML*/
    }

    listenServer() { /*faz o servidor começar a funcionar e escutar na porta 3308*/
        console.log('server chat iniciado');
        this.http.listen(3308, () => console.log('server is running on port 3308'));
    }

    listenSocket() { /*configura o Socket.io para lidar com conexões de usuários e mensagens*/
        this.io.on('connection', (socket) => {
            console.log('user connected => ', socket.id); /*escuta as conexões feitas no chat e registra o ID do usuário*/

            socket.on('message', (msg) => {
                this.io.emit('message', msg); /*quando o servidor escutar uma mensagem ele a retransmite para os outros, para fazer a comunicação*/
            });
        });
    }

    setupRoutes() {
        /*importa o Path, usado para manipular arquivos*/
        const path = require('path');
        /*importa o Router, que define o comportamento das rotas*/
        const router = require('./routes/dbRouter');

        this.app.use(router); /*integra o roteador no Express*/


        /*envia o arquivo index.html da pasta public para o navegador por diferentes rotas*/
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../front/', 'index.html'));
        });

        this.app.get('/index', (req, res) => {
            res.sendFile(path.join(__dirname, '../front/', 'index.html'));
        });

        this.app.get('/index.html', (req, res) => {
            res.sendFile(path.join(__dirname, '../front/', 'index.html'));
        });
    }
    swagger() {
        /*Configurações do Swagger*/
        const swaggerUi = require('swagger-ui-express');
        const swaggerJsDoc = require('swagger-jsdoc');

        const swaggerOptions = {
            swaggerDefinition: {
                openapi: "3.0.0",
                info: {
                    title: "API do Site TechForum",
                    version: "1.0.0",
                    description: "API's para comentários, usuários e chat",
                },
                servers: [{ url: "http://localhost:3308" }],
            },
            apis: [`${__dirname}/routes/*.js`], // Caminho para as rotas
        };


        const swaggerDocs = swaggerJsDoc(swaggerOptions);
        this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    }
}

/*Para o servidor começar a ouvir as requisições...*/
const app = new App();
app.listenServer();
app.swagger();
