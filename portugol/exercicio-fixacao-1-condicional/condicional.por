programa
{
	
	funcao inicio()
{
		//exe_01()
		//exe_02()
		exe_03()
}		
	
	funcao exe_01()
	{
	real peso1,media,soma =0.0
	inteiro idade, i=0, peso=0

	para(i = 0; i <=7; i++) {
		escreva("Coloque sua idade")
		leia(idade)
		escreva("Coloque seu peso")
		leia(peso)
		} se (peso >= 90){
			i++
			soma = soma + idade
			}
		media = soma / 7
	}
	funcao exe_02()
{
	inteiro n

	escreva("insira um numero ")
	leia(n)
	se (n >= 0){
	para (inteiro x = 0; x <= n; x++){
		escreva("\n", x)
	}	
		}senao {
			para (inteiro x = 0; x >= n; x--){
		escreva("\n", x)
			
			}	
		}
}
	funcao exe_03()
{
	real nota =0.0, somadaNota = 0.0, media,sumedia
	inteiro contador
	escreva("Quanto você quer calcular da media? ")
	leia(media)
	
	para (contador =1 ; contador <= media; contador++){
	escreva("\ninsira uma nota: ")
	leia(nota)
	somadaNota = somadaNota + nota
	enquanto (nota < 0 ou nota > 10) {
		escreva("Nota invalida! \ninsira uma nota que esteja entre 0 e 10: ")
		leia(nota)
		}
	}
	sumedia = somadaNota / media
	escreva(sumedia)
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 657; 
 * @DOBRAMENTO-CODIGO = [10, 26];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */