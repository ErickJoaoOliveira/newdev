programa
{
	
	funcao inicio()
	{
		//exe01()
		//exe02()
		//exe03()
		//exe04()
		//exe05()
		//exe06()
		//exe07()
		//exe08() não consegui terminar
		exe09()
	}
	funcao exe01()
	{
		inteiro  sequenciaFibo[40]

		sequenciaFibo[0] = 1
		sequenciaFibo[1] = 1


		para(inteiro i=2; i < 40; i++){
			
		sequenciaFibo[i] = + sequenciaFibo[i -1] + sequenciaFibo[i -2]
		escreva("\n",sequenciaFibo[i])
		}
		
		}
	funcao exe02()
		{
			inteiro numeropar[100]

	
			para(inteiro i=0; i < 100; i++){
				numeropar[i] = numeropar[i]%2 + i 
				se(numeropar[i]%2 == 0){
					numeropar[i] = numeropar[i] 
					escreva("\n", numeropar[i])
					
					}
		}
			}
	funcao exe03()
	{
					inteiro numeropar[100]

	
			para(inteiro i=0; i < 100; i++){
				numeropar[i] = numeropar[i]%2 + i 
				se(numeropar[i]%2 != 0){
					numeropar[i] = numeropar[i] 
					escreva("\n", numeropar[i])
				}
		}
			}
	funcao exe04()
	{
		inteiro numero[10]

		para(inteiro i=0; i < 10; i++){
			escreva("Digite um número ")
			leia(numero[i])
		}
		para(inteiro i=0; i < 10; i++){
				escreva("\nO cubo de ", numero[i]," é ", numero[i]*numero[i]*numero[i])
		}
	
		}
	funcao exe05()
	{
	real atletas[5], divisor =0.0

		para(inteiro i=0; i < 5; i++){
			escreva("Insira uma altura\n")
			leia(atletas[i])
			divisor += atletas[i]

		}
		divisor = divisor / 5

 		para(inteiro i=0; i < 5; i++){
		se (atletas[i] > divisor){
		escreva("\n","Os atletas que passaram da média: ",atletas[i])
			
			}
		}

	}
	funcao exe06()
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
	funcao exe07()
	{
		inteiro numero[10],numero2[10]

		para(inteiro i=0; i < 10; i++){
				escreva("Digite um número" )
				leia(numero[i])
		}
		para(inteiro i=0; i < 10; i++){
				se (numero[i]%2 == 0){
				numero2[i] = numero[i]/2
				}senao{
				numero2[i] = numero[i]*3
				}
		}
		limpa()
		para(inteiro i=0; i < 10; i++){
			escreva("Lista 1: ", numero[i],"\n")
		}

		para(inteiro i=0; i < 10; i++){
			escreva("Lista 2: ", numero2[i],"\n")
		}
		
		
		
		
		}
	funcao exe08()
	{
		inteiro numero[10],impar[5],par[5],nume = 0

		para(inteiro i=0; i < 10; i++){
				escreva("Digite um número ")
				leia(numero[i])
		}
		para(inteiro i=0; i < 10; i++){
				se(numero[i]%2 == 0){
					par[nume] = numero[i]
					
				
				}senao {
					impar[nume] = numero[i]
		
				}

				escreva("\nImpar",impar[nume]," e pares ",par[nume])
				para(inteiro i=0; i < 10; i++){
					impar[nume]
		}
				
		}
	
					
		}
	funcao exe09()	
		{
			cadeia nome[10], encon[10]
			inteiro po = 0

			para(inteiro i=0; i < 10; i++){
				escreva("Escreva o nome")
				leia(nome[i])
		}limpa()
		para(inteiro i=0; i < 10; i++){
			escreva("\nEscreva um nome")
			leia(encon[i])
			po = i
			para(inteiro y=0; i < 10; y++){
				se(encon[po] == nome[y]){
					escreva("ACHEI")
					pare
					} senao {
						escreva("NÃO ACHEI")
						}
		}
		}
			
			}		

	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 3068; 
 * @DOBRAMENTO-CODIGO = [15, 30, 44, 57, 70, 90, 106, 134];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */