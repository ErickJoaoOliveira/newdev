programa
{
	inclua biblioteca Calendario
	
	funcao inicio()
	{
		//exe01()
		//exe02()
		//exe03()
		//exe04()
		//exe05()
		//exe06()
		//exe07()
		//exe08()
		//exe09()
		//exe10()
	}
	funcao exe01()
	{
		inteiro numero[5]

		para(inteiro i =0; i<=5; i++){
			escreva("\ninsira um número\n")
			leia(numero[i])
			
			se (numero[i] ==2 ou numero[i] ==3 ou numero[i] ==5 ou numero[i] ==7){
				escreva("\n", numero[i]," Primo")
				}
				se (numero[i] %2 != 0 e numero[i]%3 !=0 e numero[i]%5 != 0 e numero[i]%7 !=7){
					escreva("\n", numero[i]," Primo")
					}
			}
		
		}
	funcao exe02()
	{
		inteiro numero[8],numeroMaior =0,posicao =0
		 
		para (inteiro i =0; i < 8; i++){
			escreva("insira um número ")
			leia(numero[i])
			
			se(numero[i] > numeroMaior){
				numeroMaior = numero[i]
				posicao = i
			}
		
			}
			escreva("Aqui está número maior ", numeroMaior, " e a posição é ", posicao)
	}
	funcao exe03()
	{
		inteiro numero[10],multiplicacao =1,soma =0

		para (inteiro i=0; i< 10; i++){
			escreva("insira um número ")
			leia(numero[i])

			se(numero[i]%2 == 0){
				multiplicacao = multiplicacao * numero[i]
				}senao se (numero[i]%2 != 0){
					soma = soma + numero[i]
					
					}
					escreva ("\nAqui está a multiplição dos numeros pares ", multiplicacao)
					escreva("\nE a soma dos número impares ",soma)
			}
			
		}
	funcao exe04()
		{
			inteiro numero[5],invertido = 4,numero2[5]

			para(inteiro i=0;i<5;i++){
				
				escreva("insira um numero ")
				leia(numero[i])
				
			}
			para(inteiro i=0;i<5;i++){
				numero2[invertido] = numero[i]
				escreva("\n", invertido,") ",numero2[invertido])
				invertido = invertido -1
				}
		}
	funcao exe05()
	{
		inteiro numero[10],conta

		para(inteiro i =0;i<10; i++){
			escreva("insira um número ")
			leia(numero[i])
			
			}
			
			escreva("insira um divisor ")
			leia(conta)
			
			para(inteiro i =0; i<10; i++){
			se(numero[i]%conta ==0){
				escreva("\n", numero[i]," é divisivel por ",conta)
				}
		
			}
	}
	funcao exe06()
	{
		inteiro numero[5],soma =0

		para(inteiro i=0; i < 5; i++){
		escreva("Digite um número ")
		leia(numero[i])

		soma = soma + numero[i]
		}
		escreva("A soma desse números é ", soma)

		para(inteiro i=0; i < 5; i++){
			escreva("\n ",i,") ",numero[i])
		}
		}
	funcao exe07()
	{
		cadeia nomes[5]

		para(inteiro i=0; i < 5; i++){
		escreva("insira um nome\n")
		leia(nomes[i])
		
		}
		escreva("\nA ordem normal")
		para(inteiro i=0; i<5; i++){
			escreva("\n", nomes[i])
		}
		escreva("\nA ordem reversa")
		para(inteiro i=4; i> -1; i = i - 1){
			escreva("\n", nomes[i])
		}
	}
	funcao exe08()
	{
		cadeia lol[13] = {" ","JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"}
		inteiro numero
		para(inteiro i=0; i < 12; i++){
		escreva("\nDigite um número de 1 a 12 ")
		leia(numero)
		escreva(lol[numero])
		
		se (numero == 0){
			pare
			}
		}
		
		}
	funcao exe09()
	{
	inteiro numeros[50],soma =1

		para(inteiro i=0; i < 50; i++){
			numeros[i] = numeros[i] + soma
			soma++
			escreva("\n", numeros[i])
		}
		}
	funcao exe10()
	{
		inteiro numeros[10]

		para(inteiro i=0; i < 10; i++){
			escreva("insira um número ")
			leia(numeros[i])

			numeros[i] = numeros[i] * numeros[i]
			
		}
		para(inteiro i=0; i < 10; i++){
			escreva("\n", i, ") ",numeros[i])
		}
		}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 3358; 
 * @DOBRAMENTO-CODIGO = [17, 34, 50, 69, 85, 105, 121, 139, 154, 164];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */