programa
{
	
	funcao inicio()
	{
		/*
	}
		inteiro Matriz[2][2]

		colocando um valor em uma matriz
		Matriz[0][0] = 10
		Matriz[1][1] = 15
		Matriz[0][1] = 8
		Matriz[1][0] = 12

		Percorrendo uma Matriz 
		No primeiro laço de repetição percorremos as linhas no segundo as colunas
		para(inteiro linha=0; linha < 2; linha++){
			Percorre colunas lembrar sempre de altarar a variavel incrementadora dos dois laços de repetição
			para(inteiro coluna=0; coluna < 2; coluna++){
				escreva(" ", Matriz[linha][coluna])
			}
		}

		cadeia alunos[] 
			 ={"Leonardo",
			  "Bruno ",
			  "João "}
		
		real nota[3][3] =
		{{4.0,2.4,5.6},
		{9.9,7.1,8.5},
		{10.0,10.0,10.0}}
		
		real media[3]

		para(inteiro linhas=0; linhas < 3; linhas++){
			real soma = 0.0

			para(inteiro i=0; i < 3; i++){
				soma += nota[linhas][i]
		}
		media[linhas]= soma / 3
		
		se (media[linhas] <= 7){
			escreva(alunos[linhas]," Reprovado ",media[linhas],"\n")
			
			} senao {
				escreva(alunos[linhas],"Aprovado ",media[linhas],"\n")
				}
			
		*/
			inteiro numeros[2][2], soma =0
			para(inteiro linha=0; linha < 2; linha++){
				para(inteiro colunas=0; colunas < 2; colunas++){
					escreva("\nDigite um número: ")
					leia(numeros[linha][colunas])
					soma = soma + numeros[linha][colunas]
		}
	
		}
		escreva(" ",soma)
		
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1064; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numeros, 53, 11, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */