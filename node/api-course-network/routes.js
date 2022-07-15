const express = require('express');
const routes = express.Router();

const IndexController = require('./src/controllers/IndexController');
const ClassroomController = require('./src/controllers/ClassroomControllers');
routes.get('/', IndexController.index);

routes.get('/controller', ClassroomController.findAll);

routes.post('/controller', ClassroomController.create);
routes.get('/controller', ClassroomController.get)
routes.delete('/controller/:id', ClassroomController.delete)
module.exports = routes;

routes.put('/controller/:id', ClassroomController.put)