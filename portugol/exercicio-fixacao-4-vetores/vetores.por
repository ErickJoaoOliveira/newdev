programa
{
	
	funcao inicio()
		{
		//exe()
		//exe02()
		exe03()
		}
	funcao exe()
	{
	real valores [4],total = 0.0

	para(inteiro i = 0; i < 4; i++){
		escreva("Digite um numero ")
		leia(valores[i])

		total += valores[i]
		}

		escreva("Posições do vetor ", total)
		escreva("\nPosições do vetor ", total /4)
	}
	funcao exe02()
	{
		cadeia jogo[5],esco = "s",  esco1 
		inteiro banido

		enquanto(esco == "sim" ou esco == "SIM" ou esco == "s"){
			escreva("Gostaria de inserir criar a lista, exibi-lá, removê-la ou sair ? \n")
			leia(esco1)

			se (esco1 == "exibir") {
				para(inteiro i =0; i < 5; i++){
					escreva(i,") ",jogo[i],"\n")
					}
					
				}

				se (esco1 == "criar"){
					para(inteiro i=0; i < 5; i++){
						escreva("Digite um jogo:\n")
						leia(jogo[i])
						}
					
					}

					se (esco1 == "criar") {
						para(inteiro i=0; i< 5; i++){
						escreva("Digite um jogo:\n")
						leia(jogo[i])
						}
						
					}

					se (esco1 == "remover"){
						escreva("\nDigite uma posição/indice do jogo que deseja remover\n")
						leia(banido)
						jogo[banido] = ""
						}

					se(esco1 == "sair"){
						esco = "nd"
						}
			
			} 
		
	}
	funcao exe03()
	{
		cadeia jogos[500]
		inteiro opcao = 1,banido

		enquanto(opcao<10){
			
			escreva("\n1) Incluir")
			escreva("\n2) Listar")
			escreva("\n3) Excluir")
			escreva("\n0) Sair")
			escreva("\nDigite a opção que deseja: ")
			leia(opcao)
			
			escolha(opcao){
				
				caso 1:
					escreva("Digite um jogo ")
					para(inteiro i =0; i < 500; i++){
						se(jogos[i] == ""){
							leia(jogos[i])
							pare
						}
					}
					pare
				caso 2: 
					para(inteiro i =0; i < 500; i++){
						se(jogos[i] == ""){
							leia(jogos[i])
							pare
						}
						escreva(i,") ",jogos[i],"\n")
					}
					pare
				caso 0: 
					escreva("Opção Sair")
					pare
				caso 3: 
					para(inteiro i =0; i < 500; i++){
					escreva("Digite uma posição/indice do jogo que deseja remover\n")
						leia(banido)
						jogos[banido] = ""
						pare
					}
					pare
				caso contrario: 
					escreva("Opção Invalida")
					pare			
		}
			
			}
		
		}
	
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1473; 
 * @DOBRAMENTO-CODIGO = [9, 23];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */