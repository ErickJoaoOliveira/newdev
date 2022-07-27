const numeros = [2, 10, 20, 15, 80]
//faz o filtro do array, recebe o 'item', que é referente a cada valor contido
//após o arrow function ele fará uma condição, e apenas apresentará os valores que se encaixarem
// Nesse exemplo ele apresenta apenas os valores que farem infeiros a ele
numeros.filter(item => item > 10)
// output: 2
const test = 'fjejfngbr'

test.indexOf('e')

const numeros2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

console.log(numeros2.filter(item => (item % 2) == 0))
