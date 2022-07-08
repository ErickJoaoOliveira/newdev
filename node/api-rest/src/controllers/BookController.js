exports.get = (req, res) => {
  return res.status(200).send('Acessando recursos book METHOD: GET');
}

exports.post = (req, res) => {
  return res.status(200).send('Acessando recursos book METHOD: POST');
}

exports.delete = (req, res) => {
  return res.status(200).send('Acessando recursos book METHOD: DELETE');
}

exports.put = (req, res) => {
  return res.status(200).send('Acessando recursos book METHOD: PUT');
}

exports.patch = (req, res) => {
  return res.status(200).send('Acessando recursos book METHOD: PATCH');
}