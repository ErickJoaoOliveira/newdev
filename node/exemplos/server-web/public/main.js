let example = 'exemplo bem loco'

//função async
const loadData = async () => {

  const response = await fetch('http://localhost:5064');
  console.log('resposta do meu servidor ', await response.json());

}

loadData()

fetch('http://localhost:5064')
.then((response) => {
  console.log('isso deu certo ', response);
})
.catch((error) => {
  console.log('Isso deu pau ', error);
})
.finally(() => {
  console.log('Requisição finalizou');
})