programa
{
	
	funcao inicio()
	{
	real alt,altM =0.0,altMen = 1000000.0,p =0.0

	
	enquanto (p <= 15)
		{
			p++
			escreva("Insira uma altura ")
			leia(alt)

			se (alt < altMen){
				altMen = alt
				} senao {
					altM =alt
					}
			}
		escreva("A maior altura é ",altM, " A menor é ",altMen )
			
	



	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 224; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */