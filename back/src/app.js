const express = require('express'); /*importado o express*/
const dotenv = require('dotenv').config(); /*importando o dotenv*/
const cors = require('cors'); /*importando o cors*/
const router = require('./routes/dbRouter'); /*importando as routes*/

const app = express();

// app.set('port', process.env.PORT);
// app.use(cors());
// app.use(express.json());
// app.use('/api', router);

//module.exports = app;