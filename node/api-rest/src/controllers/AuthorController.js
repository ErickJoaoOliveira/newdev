exports.findAll = (req, res) => {
  const query = req.query;
  console.log('Query String authors', query);
  return res.status(200).send('Acessando recursos /authors METHOD: GET');
};

exports.create = (req, res) => {
  console.log('Recebendo dados', req.body);
  return res.status(200).send('Acessando recursos /authors METHOD: POST');
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
