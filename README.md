## Banco de Dados (mySQL)

<br>
CREATE DATABASE techforum; <br>
USE techforum; <br>
<br>

CREATE TABLE usuarios(<br>
    id INT PRIMARY KEY AUTO_INCREMENT,<br>
    nome VARCHAR(255) NOT NULL,<br>
    email VARCHAR(255) NOT NULL UNIQUE,<br>
    senha VARCHAR(255) NOT NULL<br>
);

CREATE TABLE amigos(<br>
   id_usuario INT,<br>
   id_amigo INT,<br>
   status VARCHAR(255),<br>
   CONSTRAINT PK_amigos PRIMARY KEY (id_usuario, id_amigo),<br>
   FOREIGN KEY(id_usuario) REFERENCES usuarios(id),<br>
   FOREIGN KEY(id_amigo) REFERENCES usuarios(id)<br>
);

CREATE TABLE postagens(<br>
    id INT PRIMARY KEY AUTO_INCREMENT,<br>
    titulo VARCHAR(255),<br>
    informacoes TEXT,<br>
    datapost TIMESTAMP<br>
);

CREATE TABLE mensagens(<br>
    id INT PRIMARY KEY AUTO_INCREMENT,<br>
    informacoes TEXT,<br>
    datamensagem TIMESTAMP,<br>
    autor_id INT,<br>
    FOREIGN KEY(autor_id) REFERENCES usuarios(id)<br>
);

CREATE TABLE conversas(<br>
    id INT PRIMARY KEY AUTO_INCREMENT,<br>
    informacoes TEXT,<br>
    dataconversa TIMESTAMP,<br>
    autor_id INT,<br>
    amigo_id INT,<br>
    FOREIGN KEY(autor_id) REFERENCES usuarios(id),<br>
    FOREIGN KEY(amigo_id) REFERENCES usuarios(id)<br>
);

CREATE TABLE categorias(<br>
    id INT PRIMARY KEY AUTO_INCREMENT,<br>
    titulo VARCHAR(255),<br>
    informacoes TEXT<br>
);
