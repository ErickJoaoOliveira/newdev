
exports.findAll = async (req,res) => {
  try {
    const sql = await database.select('*').from('controller');
    return response.status(200)
      .send({
        controller: sql
      });
  } catch (error) {
    logger(error.message);
    return response.status(500)
      .send({ error: error?.message || e });
  }
}

exports.create = async (req,res) => {
  try {
    // await database('profesor').insert(req.body);

    return res.status(200).send({status: 'success'});
  } catch {
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.get = async (req,res) => {
  try {
    const params = req.params

    const [previousProfessor] = await database
    .select('*')
    .from('controller')
    .where({ id: params.id })
    .limit(1);

  if (!previousProfessor) {
    return response.status(404) 
      .send(`O registro com o id: ${params.id} não foi encontrado!`);
  }
  return response
    .status(200)
    .send({ data: previousProfessor });
  }catch (error){
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.delete = async (req,res) => {
  try {
    const params = req.params;

    const [course] = await databases.select('*')
    .from('controller')
    .where({ id: params.id })
    .limit(1);

    if (!course) {
      return response.status(404) 
        .send(`O registro com id: ${params.id} não foi encontrado!`);
    }

    await database
      .delete()
      .from('controller')
      .where({ id: course.id });

    return response
      .status(200)
      .send({ status: 'Registro removido com sucesso' });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}
exports.put = async (req,res) => {
  try {
    const params = request.params;

    const [previousProfessor] = await database
      .select('*')
      .from('controller')
      .where({ id: params.id })
      .limit(1);

    if (!previousProfessor) {
      return response.status(404) 
        .send(`O professor com id: ${params.id} não foi encontrado!`);
    }

    const nextProfessor = request.body;

    await database
      .update({ name: nextProfessor.name })
      .from('authors')
      .where({ id: previousProfessor.id });

    return response
      .status(200)
      .send({ status: 'Registro atualizado com sucesso', data: nextProfessor });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}
