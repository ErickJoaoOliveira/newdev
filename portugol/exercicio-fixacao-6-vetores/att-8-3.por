programa
{
	
	funcao inicio()
	{
		inteiro num[10], par[10], impar[10], indicePar = 0, indiceImpar = 0, supp = 0
		logico verific

		para(inteiro i=0; i < 10; i++){
			escreva("Insira um número: ")
			leia(num[i])

			verific = verifica(num[i])
			
			se(verific == verdadeiro){
				par[indicePar] = num[i]
				
				indicePar++
			}senao{
				impar[indiceImpar] = num[i]
				
				indiceImpar++
			}
		}

		verific = verdadeiro

		enquanto(verific == verdadeiro){
			verific = falso
		
			para(inteiro i=0; i < 10 - 1; i++){
				se(par[i] > par[i+1]){
					supp = par[i]
					par[i] = par[i+1]
					par[i+1] = supp
					verific = verdadeiro
				}
			}
				
			para(inteiro i=0; i < 10 - 1; i++){
				se(impar[i] < impar[i+1]){
					supp = impar[i]
					impar[i] = impar[i+1]
					impar[i+1] = supp
					verific = verdadeiro
				}
			}
		}

		limpa()

		escreva("\nNúmeros pares em ordem crescente: ")
	
		para(inteiro i=0; i < 10; i++){
			se(par[i] != 0){
				escreva("\n",par[i])
			}
		}
		escreva("\nNúmeros ímpares em ordem decrescente: ")
	
		para(inteiro i=0; i < 10; i++){
			se(impar[i] != 0){
				escreva("\n",impar[i])
			}
		}
	}

	funcao logico verifica(inteiro num) {
		se (num%2 == 0) {
			retorne verdadeiro
		}senao {
			retorne falso
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 452; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */