programa{

  funcao inicio(){

    cadeia XeO[3][3],resposta="" ,segundaResposta = "",enter=" "
    inteiro l, c, linha, coluna, jogador, ganhou, jogadas, opcao,Y,X

    faca{
      jogador = 1
      ganhou = 0
      jogadas = 0
      para(l = 0; l < 3; l++){
        para(c = 0; c < 3; c++)
          XeO[l][c] = " "
      }
  
      faca{
     	escreva("Primeiro Jogador selecione entre {X} ou {O}\n")
		leia(resposta)

		se (resposta == "X"){
		escreva("O segundo jogador irá ficar com {O}\n\n")
		segundaResposta = "O"
					}
		se (resposta == "O"){
		escreva("O segundo jogador irá ficar com {X}\n")
		segundaResposta = "X"
				
		}
		escreva("pressione {Enter} para iniciar\n")
		leia(enter)
		limpa()
       	para(inteiro x=0; x < 9; x++){
			escreva("\n\n 0   1    2\n\n")			
			escreva(XeO[0][0],"  | ",XeO[0][1],     " |  ",XeO[0][2],"  0\n")
			escreva("---|---|---\n")
			escreva(XeO[1][0],"  |"," ",XeO[1][1]," |","  ",XeO[1][2],"  1\n")
			escreva("---|---|---\n")
			escreva(XeO[2][0],"  | ",XeO[2][1],     " |  ",XeO[2][2],"  2\n")
	
		
			escreva("Em que posição você quer colocar ")
			leia(Y,X)
			XeO[Y][X] = resposta
	
			para(inteiro i=0; i < 1; i++){
				escreva("\n\n 0   1    2\n\n")
				escreva(XeO[0][0],"  | ",XeO[0][1],     " |  ",XeO[0][2],"\n")
				escreva("---|---|---\n")
				escreva(XeO[1][0],"  |"," ",XeO[1][1]," |","  ",XeO[1][2],"  \n")
				escreva("---|---|---\n")
				escreva(XeO[2][0],"  | ",XeO[2][1],     " |  ",XeO[2][2],"\n")
			
				escreva("Agora quem irá jogador será o player2 {O} ")
				leia(Y,X)
				XeO[Y][X] = segundaResposta
			}
       	 }
    
        faca{
          faca{
            escreva("\nJogador ",jogador, " digite linha e coluna da posição desejada: ")
            leia(linha, coluna)
          }enquanto(linha < 0 ou linha > 2 ou coluna < 0 ou coluna > 2)
        }enquanto(XeO[linha][coluna] != " ")
        
        se(jogador == 1){
          XeO[linha][coluna] = "O"
          jogador++
        }
        senao{
          XeO[linha][coluna] = "X"
          jogador = 1
        }
        jogadas++
        
        para(l = 0; l < 3; l++){
          se(XeO[l][0] =="O" e XeO[l][1] == "O" e XeO[l][2] == "O")
            ganhou = 1
        }
    
        para(l = 0; l < 3; l++){
          se(XeO[l][0] =="X" e XeO[l][1] == "X" e XeO[l][2] == "X")
            ganhou = 2
        }
        
        para(c = 0; c < 3; c++){
          se(XeO[0][c] == "O" e XeO[1][c] == "O" e XeO[2][c] == "O")
            ganhou = 1
        }
    
        para(c = 0; c < 3; c++){
          se(XeO[0][c] == "X" e XeO[1][c] == "X" e XeO[2][c] =="X")
            ganhou = 2
        }
        se(XeO[0][0] == "O" e XeO[1][1] == "O" e XeO[2][2] == "O")
          ganhou = 1
    
        se(XeO[0][0] == "X" e XeO[1][1] == "X" e XeO[2][2] == "X")
          ganhou = 2
        
        se(XeO[0][2] == "O" e XeO[1][1] == "O" e XeO[2][0] == "O")
          ganhou = 1  
    
        se(XeO[0][2] == "X" e XeO[1][1] == "X" e XeO[2][0] == "X")
          ganhou = 2
      }enquanto(ganhou == 0 e jogadas < 9)
  
      escreva("\n\n 0   1    2\n\n")
      para(l = 0; l < 3; l++){
        para(c = 0; c < 3; c++){
          escreva(" ", XeO[l][c])
          se(c < 2)
            escreva(" | ")
          se(c == 2)
            escreva("  ", l)
        }
        se(l < 2)
          escreva("\n------------")
        escreva("\n")
      }
  
      se(ganhou == 1)
        escreva("\n\tParabéns Jogador 1. Você ganhou!\n\n")

      se(ganhou == 2)
        escreva("\n\tParabéns Jogador 2. Você ganhou!\n\n")
  
      escreva("Digite 1 para jogar novamente: ")
      leia(opcao)
    }enquanto(opcao == 1)
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 707; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */