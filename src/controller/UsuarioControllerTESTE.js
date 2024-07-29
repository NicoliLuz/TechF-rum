const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'techforum'
});
connection.connect();

exports.signup = (req, res) => {
    const { userName, password } = req.body;

    const insertUserQuery = 'INSERT INTO users (userName, password) VALUES (?, ?, ?, ?)';
    connection.query(insertUserQuery), (userName, password), (err, results) => {
        if (request.body.senha == request.body.confirmacaoSenha) {

            const query = "INSERT INTO usuarios(nome, email, senha) VALUES(?,?,?)";
    
            connection.query(query, params, (err, results) => {
                if (results) {
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
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Ops, deu senha e confirmação de senha não iguais!",
                    data: "Ops, deu senha e confirmação de senha não iguais!",
                })
        }
    }
}
        
