const database = require('../databases/knex')

exports.findAll = async (req, res) => {
  try {
    const sql = await database.select('*').from('authors');

    return res.status(200).send({
      authors: sql
    });
  } catch (error) {
    return res.status(500).send({error: error?.message || e});
  }
};

exports.create = (req, res) => {
  try {
    await database('authors').insert(req.body);

    return res.status(200).send({
      status: 'sucess'
    });
  } catch (error) {
    return res.status(500).send({error: error?.message || e});
  }
};

exports.getById = (req, res) => {
  const params = req.params;
  console.log('Query String authors', params);
  return res.status(200).send(`Acessando recursos /authors METHOD: GET BY ID ${params.id}`);
};

exports.deleteById = (req, res) => {
  const params = req.params;
  console.log('Query String authors', params);
  return res.status(200).send(`Acessando recursos /authors METHOD: DELETE BY ID ${params.id}`);
};

exports.put = (req, res) => {
  const params = req.params;
  console.log('Query String authors', params);
  return res.status(200).send(`Acessando recursos /authors METHOD: PUT BY ID ${params.id}`);
};

exports.patch = (req, res) => {
  const params = req.params;
  console.log('Query String authors', params);
  return res.status(200).send(`Acessando recursos /authors METHOD: PATCH BY ID ${params.id}`);
};
