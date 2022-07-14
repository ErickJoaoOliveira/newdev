const {response, request } = require('express');
const database = require('../databases/knex')
const logger = require('../utils/logger')
exports.findAll = async (req, res) => {
  try {
    const sql = await database.select('*').from('authors');

    return res.status(200).send({
      authors: sql
    });
  } catch (error) {
    logger(error);
    return res.status(500).send({error: error?.message || e});
  }
};

exports.create = async (req, res) => {
  try {
    await database('authors').insert(req.body);

    return res.status(200).send({
      status: 'sucess'
    });
  } catch (error) {
    logger(error.message);
    return res.status(500).send({error: error?.message || e});
  }
};

exports.getById = async (req, res) => {
  try {
    const params = req.params;
    const [author] = await database.select('*').from('authors').where({id: params.id}).limit(1);
  return res.status(200).send(`Acessando recursos /authors METHOD: GET BY ID ${params.id}`);

  } catch (error) {
    logger(error);
    return res.status(500).send({error: error?.message || e})
  }


};

exports.deleteById = async (req, res) => {
  try {
    const params = req.params;
    const [previousAuthor] = await database.select('*').from('authors').where({id: params.id}).limit(1);

  if(!author){
    logger(error);
    return res.status(404).send(`O registro com o id ${params.id} não foi encontrado`);
  }
  
  const nextAuthor = req.body;
  await database.delete({name: nextAuthor.name}).from('authors').where({id: previousAuthor.id});
  return res.status(200).send(`Acessando recursos /authors METHOD: DELETE BY ID ${params.id}`);
  } catch (error) {
    logger(error);
    return res.status(500).send({error: error?.message || e})
  }
};

exports.put = async (req, res) => {
  try {
    const params = req.params;
    const [previousAuthor] = await database.select('*').from('authors').where({id: params.id}).limit(1);
    // Precisamos buscar no banco de dados o possivel registro
    // Se não existir, é preciso informar ao cliente que não foi encontrado
    // Capturar o valor do body no qual o cliente quer atualizar e modificar a informação
    // Avisar ao cliente que encontramos o registro e retornar o registro atualizado
    
    if(!author){
      logger(error);
      return res.status(404).send(`O registro com id ${params.id} não foi encontrado`);
    }
    
    const nextAuthor = request.body
    console.log('authors UPDATE', nextAuthor);
    console.log('authors ENCONTRADO', previousAuthor);
    await database.update({name: nextAuthor.name}).from('authors').where({id: previousAuthor.id});

    return res.status(200).send({status: 'Registro atualizado com sucesso', data: nextAuthor});

  } catch (error) {
    logger(error);
    res.status(500).send({error: error?.message || e});
  }
};