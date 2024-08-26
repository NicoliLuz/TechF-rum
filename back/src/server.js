/*importando os módulos*/
const express = require('express'); /*Importa o Express, um framework para criar servidores web*/
const http = require('http'); /*Importa o módulo HTTP nativo do Node.js*/
const { Server } = require('socket.io'); /*Importa o Socket.io para comunicação em tempo real */
 
class App {
    constructor() { /*Importa o módulo CORS para permitir que o navegador faça requisições de diferentes origens*/
        const cors = require('cors');

        this.app = express(); /*Cria o servidor web usando Express*/
        this.app.use(cors()); /*Permite que o servidor aceite requisições de diferentes origens*/
        this.app.use(express.json()); /*Faz o servidor entender dados no formato JSON*/
        this.http = http.createServer(this.app); /*Cria um servidor HTTP que usa o servidor web do Express*/
        this.io = require("socket.io")(this.http, { /*Configura o Socket.io para comunicação em tempo real*/
            cors: {
             // permite o browser fazer requisições da porta 5500 por causa do live server
              origin: "http://127.0.0.1:5500",
              methods: ["GET", "POST", "PUT", "DELETE"]
            }
          });
        this.listenSocket(); /*Configura o Socket.io para lidar com conexões e mensagens*/
        this.setupRoutes(); /*Configura as rotas para servir arquivos e responder a requisições*/

        this.app.use(express.static('front')); /*Define a pasta 'front' para servir arquivos estáticos como HTML*/
    }

    listenServer() { /*Faz o servidor começar a funcionar e escutar na porta 3308*/
        console.log('server chat iniciado');
        this.http.listen(3308, () => console.log('server is running on port 3308'));
    }

    listenSocket() { /*Configura o Socket.io para lidar com conexões de usuários e mensagens*/
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

        this.app.use(router); /*Integra o roteador no Express*/


        /*Envia o arquivo index.html da pasta public para o navegador por diferentes rotas*/
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../front/', 'index.html')); 
        });

        this.app.get('/index', (req, res) => {
            res.sendFile(path.join(__dirname, '../front/', 'index.html'));
        });

        this.app.get('/index.html', (req, res) => {
            res.sendFile(path.join(__dirname, '../front/', 'index.html'));
        });

        /*enviando os demais arquivos, correspondente as páginas*/
        this.app.get('/chat', (req, res) => {
            res.sendFile(__dirname + '/chat.html');
        });

        this.app.get('/chatUsuario', (req, res) => {
            res.sendFile(__dirname + '/chatUsuario.html');
        });

        this.app.get('/softskills', (req, res) => {
            res.sendFile(__dirname + '/softskills.html');
        });

        this.app.get('/empresas', (req, res) => {
            res.sendFile(__dirname + '/empresas.html');
        });

        this.app.get('/mediasalarial', (req, res) => {
            res.sendFile(__dirname + '/mediasalarial.html');
        });

        this.app.get('/automacao', (req, res) => {
            res.sendFile(__dirname + '/automacao.html');
        });

        this.app.get('/ramificacoes', (req, res) => {
            res.sendFile(__dirname + '/ramificacoes.html');
        });

        this.app.get('/sobre', (req, res) => {
            res.sendFile(__dirname + '/sobre.html');
        });

        this.app.get('/chat', (req, res) => {
            res.sendFile(__dirname + '/chat.html');
        });

        this.app.get('/cadastroUsuario', (req, res) => {
            res.sendFile(__dirname + '/cadastroUsuario.html');
        });
    }
}

/*Para o servidor começar a ouvir as requisições...*/
const app = new App();
app.listenServer();

