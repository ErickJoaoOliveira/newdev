const express = require('express');
const routes = express.Router(); // Rotas para os recursos

const IndexController = require('./controllers/IndexController');
const AuthorController = require('./controllers/AuthorController');
const BookController = require('./controllers/BookController');

// Routes Index
// Cria as rotas que serão exibidas de acordo com seu método 
routes.get('/', IndexController.index);

// Route Authors
routes.get('/authors', AuthorController.findAll);
routes.post('/authors', AuthorController.create);

// Recebem parâmetros, nesse caso o Query Params, que é um id
routes.get('/authors/:id', AuthorController.getById);
routes.delete('/authors/:id', AuthorController.deleteById);
routes.put('/authors/:id', AuthorController.put);

// Route Books
routes.get('/books', BookController.findAll)
routes.get('/books', BookController.create)
routes.get('/books/:id', BookController.get);
routes.post('/books/:id', BookController.post);
routes.delete('/books/:id', BookController.delete);
routes.put('/books/:id', BookController.put);
// routes.patch('/books', BookController.patch);

module.exports = routes;