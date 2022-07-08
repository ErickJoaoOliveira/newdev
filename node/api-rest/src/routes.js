const express = require('express');
const routes = express.Router(); // Rotas para os recursos

const IndexController = require('./controllers/IndexController');
const AuthorController = require('./controllers/AuthorController');
const BookController = require('./controllers/BookController');

// Routes Index
// Cria as rotas que será exibida de acordo com seu método 
routes.get('/', IndexController.index);

// Route Authors
routes.get('/authors', AuthorController.findAll);
routes.post('/authors', AuthorController.create);

// Recebem parâmetros, nesse caso o Query Params, que é um id
routes.get('/authors/:id', AuthorController.getById);
routes.delete('/authors/:id', AuthorController.deleteById);
routes.put('/authors/:id', AuthorController.put);
routes.patch('/authors/:id', AuthorController.patch);

// Route Books
routes.get('/books', BookController.get);
routes.post('/books', BookController.post);
routes.delete('/books', BookController.delete);
routes.put('/books', BookController.put);
routes.patch('/books', BookController.patch);

module.exports = routes;