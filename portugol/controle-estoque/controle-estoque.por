programa
{
	
	funcao inicio()
	{
	inteiro resposta = 1 , numerodecarro = 0, indice = 0, entrada[9999], numcarros = 0, soma = 0, codigo[9999], saida[9999], estoque[9999]
	cadeia veiculos[9999], carro,EntradaOuSaida
		

		enquanto(resposta != 0){
			escreva("Qual operação deseja efetuar\n1)Cadastrar um veiculo\n2)Listar os Veículos\n3)Consultar Saldo de Veículo\n4)Dar Entrada ou Saída do Veículo\n5)Sair\n")
			leia(resposta)
			limpa()
			
			se(resposta == 1){
				escreva("Cadastre um veiculo\n ")
				leia(veiculos[indice])				
				indice++
				limpa()
			}
			
			se(resposta == 2){
			
				se(indice == 0){
					escreva("ERRO!!! nenhum produto encontrado!!!!!")
					pare
				} senao {
					listaVeiculos(indice,veiculos)
				}
				
			}
			
			se(resposta == 3){
				se(indice == 0 ){
					escreva("ERRO!! não possui nenhum veículo listado para que possamos consultar o Saldo\n")
					}

				se(indice !=0){
					escreva("Código   ||   Carro  ||  Entrada || Saida   || Estoque\n")
					para(inteiro i=0; i < indice; i++){
					escreva("   ",i,"     ||   ",veiculos[i],"      ||   ", entrada[i],"      ||   ", saida[i],"     ||    ", estoque[i], "\n")
					}
				}
			}
			
			se (resposta == 4){				
		
				escreva("Você quer dar a Entrada ou Saída {Voltar}\n")
				leia(EntradaOuSaida)

				para(inteiro i=0; i < 10; i++){
					se(EntradaOuSaida == "voltar" ou EntradaOuSaida == "Voltar"){
						pare
						}
					}
					limpa()
				
				se (EntradaOuSaida == "entrada" ou EntradaOuSaida == "Entrada"){
	
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
				}
				se(EntradaOuSaida == "Saida" ou EntradaOuSaida == "saida" ou EntradaOuSaida == "Saída" ou EntradaOuSaida == "saída"){
					
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
					
				}
			}
			
			se(resposta == 5){
				escreva("Obrigado por utilizar o Programa. Volte sempre !\nCaso ache algum erro de execução mande um email para o nosso suporte\nsuporte404@gmail.com")
				pare
			}		
		}
	}

	funcao listaVeiculos(inteiro numeroTotalDeVeiculosCadastros, cadeia veiculos[]) {
		para(inteiro i=1; i < numeroTotalDeVeiculosCadastros; i++) {
			escreva(i,": ",veiculos[i],"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 3306; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */