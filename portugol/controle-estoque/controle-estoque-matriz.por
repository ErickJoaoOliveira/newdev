programa
{
	
	funcao inicio()
	{
		inteiro resposta = 0,logic =0,indice =0,SaldoVeiculo[999][999],numerodecarro,numcarros =0,soma =0,entrada[999],estoque[999],saida[999]
		cadeia veiculos[99999]

		enquanto(0 == 0){
			se (logic == 1){
				pare
				}
				escreva("Qual operação deseja efetuar\n1)Cadastrar um veiculo\n2)Listar os Veículos\n3)Consultar Saldo de Veículo\n4)Dar Saída em um Veículo\n5)Dar uma Entrada em um veículo\n6)Sair\n")
				leia(resposta)
				limpa()
			escolha(resposta){

			caso 1: escreva("Cadastre um veiculo\n ")
				leia(veiculos[indice])				
				indice++
				limpa()
			pare
			caso 2: 	se(indice == 0){
					escreva("ERRO!!! Nenhum produto foi encontrado para listar!!!\n\n")
					pare
				} senao {
					listaVeiculos(indice,veiculos)
				}
			pare
			caso 3: escreva(1)
			pare
			caso 4: 
					listaVeiculos(indice,veiculos)
					
					escreva("Qual carro quer dar saida\n ")
					leia(numerodecarro)
					limpa()
					para(inteiro i=0; i < 100; i++){
						se(numerodecarro == i){
							escreva("digite o numero de saidas que teve esse carro\n")
							leia(numcarros)
							saida[i] = numcarros
							soma -= numcarros
							limpa()
							
						}se(estoque[i] < saida[i]){
							escreva("Não tem veículos o suficiente para retirar!!! ")
							pare
						} se(estoque[i] < saida[i]){
							escreva("\nSaiu mais carros do que entrou, valor incorreto, tente novamente\n ")
							saida[i] = 0
						pare
						}senao{
							estoque[i] = estoque[i] - saida[i]
						}
						
					}
			pare
			caso 5: 
				listaVeiculos(indice,veiculos)
					
					escreva("Qual carro quer dar entrada\n ")
					leia(numerodecarro)
					limpa()
					
					para(inteiro i=0; i < 100; i++){
						se(numerodecarro == i){
							escreva("Digite o número de entradas que teve esse carro\n ")
							leia(numcarros)
							soma = soma + numcarros
							entrada[i] =entrada[i] + numcarros
							limpa()
							estoque[i] = entrada[i]
						} se(soma>200){
						escreva("\nERROR Garagem cheia !! val.Max{200 carros}, tente novamente\n")
						estoque[i] = estoque[i] - entrada[i]
						entrada[i] = entrada[i] - numcarros
						
						pare
						}
					}
			pare
			caso 6: escreva("Obrigado por utilizar o Programa. Volte sempre !\nCaso ache algum erro de execução mande um email para o nosso suporte\nsuporte404@gmail.com")
			logic = 1
			pare
			caso contrario: escreva("contrario")
			pare
		}

		}
	}
	
	funcao listaVeiculos(inteiro numeroTotalDeVeiculosCadastros, cadeia veiculos[]) {
		para(inteiro i=0; i < numeroTotalDeVeiculosCadastros; i++) {
			escreva(i,": ",veiculos[i],"\n")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 779; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */