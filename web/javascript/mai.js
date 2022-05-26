// POO: Programação Orionetada a Objetos
// Atributos e Metodos (Funções)

//Exemplo de atributos: Cor, Tamanho, Largura...
//Exemplo de Metodos/Funções: Freiar,Acelerar,Virar a Direita

// A converção para a declaração de variável deve ser seguida

// A variável NÃO PODE possuir acentos
// A variável NÃO PODE iniciar com NÚMEROS
// A variável NÃO PODE iniciar com CARACTERES ESPECIAIS (*,&,%,...)
// A variável NÃO PODE iniciar com letra maíscula
// A variáveis devem possuir um valor semântico (FAZER SENTIDO)

//Funções devem seguir as mesmas convenções e devem ter valor semântico

/*      Exemplos      */

let userName = 'Tchola'

// A Primeira forma de criar uma função é atribuir direto na variavel.
let somaValores = function () {
  console.log(userName + ' MDS')
}
// Summonar a variável
userName()

//A Segunda forma de criar uma função Named Function
function subtraiValores() {
  console.log('Subtrai')
}

subtraiValores()

// Terceira forma de cirar uma função
const carro = {
  cor: 'Vermelho',
  andar: function () {
    console.log('andando')
  }
}

// Por convenção, é possivel declarar Constantes er possuem escopo global em maisculo, somente nesses casos
const NUMERO = 100

console.log(carro)

// Quarta forma de criar uma função, Arrow Function
multiplicaValores = () => {
  console.log('multiplicaValores', multiplicaValores)
}

multiplicaValores()

//___________________________________________________________________________

//Buscando elementos dentro da tag html
// getElementByld: Busca o elemento pelo ID
const bottomDocment = document.getElementById('bottomDocment')

//Buscando pela tag
//querySelectorAll retorna um array de elementos que ele encontrar
const inputs = docment.querySelectorAll('inputs')
console.log(inputs)
// Buscando um elemto pelo indice do mesmo

console.log('input selector -> ', input[2])

//O querySelector retorna o primeiro elemento que ele encontrar
const input = docment.querySelector('input')
console.log(input)

//buscando pelo id
const txt = docment.querySelector('#texto')
console.log(txt)

console.log(bottomDocment)

//Buscando pela class
const social = document.querySelector('social')
console.log('social -> ', social)

const div = document.createElement('p')

console.log('p -> ', p)
p.inputHTML = 'Chuva'

document.getElementById('texto-gene', p.inputHTML)

//________________________________________________________________________________

//uma forma deidentificar uma classe é que elacomessa com letra maiuscula no inicio
function Carro(cor,marca){
  return{
  color: 'vermelho',
  marca: 'lambo',
  }
}

const carro1 = Carro('vermelho', 'lambo',2010);
const carro2 = Carro('azul', 'lambo', 2020);
const carro3 = Carro('amarelo', 'lambo', 2021);
const carro4 = Carro('laranja', 'lambo', 2018);

console.log(carro1);
console.log(carro2);
console.log(carro3);
console.log(carro4);

function Pessoa(nome,sobrenome){
  return{
    nome,sobrenome
  }
}

const pessoa1 = Pessoa('julois', 'frederico');
const pessoa2 = Pessoa('cris', 'jacimar');

console.log(pessoa1);
console.log(pessoa2);