// sqlite3 é um banco de dados
// sql é uma linguagem para consulta em banco de dados 
// knex possibilita a conversão de arquivos gravados em JS
// para linguagem sql, para o banco de dados 

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//  Está criando um servidor através do framework "Express"
const app = express();

const PORT = 2442;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('API is listening on port:', PORT);
});