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

CREATE TABLE postagens(<br>
    id INT PRIMARY KEY AUTO_INCREMENT,<br>
    nome VARCHAR(255) NOT NULL,<br>
    textoPost TEXT NOT NULL,<br>
    pagina VARCHAR(100) NOT NULL,<br>
    datapost TIMESTAMP DEFAULT CURRENT_TIMESTAMP<br>
);

Tabelas excluídas

drop table amigos;
drop table categorias;
drop table conversas;
drop table mensagens;
drop table contato;