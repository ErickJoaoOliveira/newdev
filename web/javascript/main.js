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
  console.log(userName +' MDS')
}
// Summonar a variável 
userName();

//A Segunda forma de criar uma função Named Function
function subtraiValores() {
  console.log('Subtrai')
}

subtraiValores();

// Terceira forma de cirar uma função
const carro = {
  cor: 'Vermelho',
  andar: function(){
    console.log('andando')
  }
}


// Por convenção, é possivel declarar Constantes er possuem escopo global em maisculo, somente nesses casos 
const NUMERO = 100

console.log(carro)

// Quarta forma de criar uma função, Arrow Function
multiplicaValores = () => {
console.log('multiplicaValores', multiplicaValores);
}

multiplicaValores()
