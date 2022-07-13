const {response, request} = require('express')
const database = require('../databases/knex')

exports.findAll = async (req, res) => {
  try {
    const sql = await database.select('*').from('books');

    return res.status(200).send({
      books: sql
    });
  } catch (error) {
    return res.status(500).send({error: error?.message || e});
  }
};

exports.create = async (req, res) => {
  try {
    await database('books').insert(req.body);

    return res.status(200).send({
      status: 'sucess'
    });
  } catch (error) {
    return res.status(500).send({error: error?.message || e});
  }
};

exports.get = async (req, res) => {
  try {
    const params = req.params
    const [books] = await database.select('*').from('books').where({id: params.id}).limit(1);
  return res.status(200).send(`Acessando recursos /books METHOD: GET BY ID ${params.id}`);
} catch (error){
  log(error);
  return res.status(500).send({error: error?.message || e})
}
}


exports.post = async (req, res) => {
 try {
  const params = req.params
  return res.status(200).send('Acessando recursos book METHOD: PUT');
}
catch (error ){
  log(error);
  return res.status(500).send(`O registro com o id ${params.id} não foi encontrado`)
}
};

exports.delete = (req, res) => {
  try{
    const params = req.params
    const [previousBooks] = await database.select('*').from('books').where({id: params.id}).limit(1);
    
    if(!books){
      return res.status(404).send(`O registro com o id ${params.id} não foi encontrado`);
    }
    const nextBooks = req.body;
    await database.delete({name: nextBooks.name}).from('books').where({id: previousBooks.id});
    return res.status(200).send(`Acessando recursos /authors METHOD: DELETE BY ID ${params.id}`);

    } catch (error) {
      log(error);
      return res.status(500).send({error: error?.message || e})
    }
}

exports.put = (req, res) => {
  try {
    const params = req.params;
    const [previousBooks] = await database.select('*').from('authors').where({id: params.id}).limit(1)
    
    if(!author){
      log(error);
      return res.status(404).send(`O registro com id ${params.id} não foi encontrado`);
    }
    
    const nextBook = request.body
    console.log('authors UPDATE', nextBook);
    console.log('authors ENCONTRADO', previousBooks);
    await database.update({name: nextBook.name}).from('authors').where({id: previousBooks.id});

    return res.status(200).send({status: 'Registro atualizado com sucesso', data: nextBook});

  } catch (error) {
    log(error);
    res.status(500).send({error: error?.message || e});
  }
}

// exports.patch = (req, res) => {
//   return res.status(200).send('Acessando recursos book METHOD: PATCH');
// }