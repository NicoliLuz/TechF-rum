/*importando os módulos*/
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

class App {
    constructor() {
        const cors = require('cors');

        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.http = http.createServer(this.app);
        this.io = new Server(this.http);
        this.listenSocket();
        this.setupRoutes();

        this.app.use(express.static('public'));
    }

    listenServer() {
        console.log('server chat iniciado');
        this.http.listen(3308, () => console.log('server is running on port 3308'));
    }

    listenSocket() {
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
