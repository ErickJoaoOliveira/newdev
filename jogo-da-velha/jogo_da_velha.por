programa
{
	
	funcao inicio()
	{
	cadeia resposta="", segundaResposta="",XeO[3][3],simounao=""
	inteiro X,Y
	
				escreva("Qual você quer seleiconar {X} ou {O}\n")
				leia(resposta)

				se (resposta == "X"){
					escreva("O segundo jogador irá ficar com {O}\n")
					segundaResposta = "O"
					}
				se (resposta == "O"){
				escreva("O segundo jogador irá ficar com {X}\n")
				segundaResposta = "X"
					}

					escreva("Que comece o Jogo\n")
					escreva("    | ",     "    |  \n")
					escreva("----|-----|-----\n")
					escreva("    |",  "     |  \n")
					escreva("----|-----|-----\n")
					escreva("    |",  "     |  \n\n\n")

				enquanto(0 ==0){
					
				
					se (resposta == "X")
					{
						escreva("Comece o jogador {X}\n") 

					para(inteiro l=0; l < 3; l++){
						para(inteiro c=0; c < 3; c++){
							XeO[l][c] = " "
						}

					}
							para(inteiro x=0; x < 9; x++){
										
								escreva(XeO[0][0],"  | ",XeO[0][1],     " |  ",XeO[0][2],"\n")
								escreva("---|---|---\n")
								escreva(XeO[1][0],"  |"," ",XeO[1][1]," |","  ",XeO[1][2],"  \n")
								escreva("---|---|---\n")
								escreva(XeO[2][0],"  | ",XeO[2][1],     " |  ",XeO[2][2],"\n")

										escreva("deseja vizualiar as posições {sim} ou {não}\n")
										leia(simounao)
										se(simounao == "sim")
										{
											escreva("0 aperte{Enter} 0 |"," 0 aperte{Enter} 1 |"," 0 aperte{Enter} 2\n")
											escreva("1 aperte{Enter} 0 |"," 1 aperte{Enter} 1 |"," 1 aperte{Enter} 2\n")
											escreva("2 aperte{Enter} 0 |"," 2 aperte{Enter} 1 |"," 2 aperte{Enter} 2\n")
											} 
										escreva("Em que posição você quer colocar ")
										leia(Y,X)
										XeO[Y][X] = resposta

										para(inteiro i=0; i < 1; i++){

											escreva(" Agora quem irá jogador será o player2 {O} ")
											leia(Y,X)
											XeO[Y][X] = segundaResposta
										}
								}
										
					}
				
				}
	}
	
}
					/*
					}senao{ se (resposta == "O"){
						escreva("Comece o jogador {O}\n") 
								
						para(inteiro y=0; y < 9; y++){
							para(inteiro X=0; X < 9; X++){
							escreva("Em que posição você quer colocar\n")
							leia(XeO[y][X])

					escreva(XeO[0][0],"    | ",XeO[0][1],     "    |  ",XeO[0][2],"\n")
					escreva("-----|------|------\n")
					escreva(XeO[1][0],"    |"," ",XeO[1][1],"    |","  ",XeO[1][2],"  \n")
					escreva("-----|------|------\n")
					escreva(XeO[2][0],"    | ",XeO[2][1],     "    |  ",XeO[2][2],"\n")
					}
						}
					}
					}
				}
				*/
	

	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 186; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */