programa {
	funcao inicio() {
    //    exemplo_enquanto()
    //    exemplo_faca_enquanto()
    //    exemplo_para()
        
	}
	
	funcao exemplo_enquanto() {
		    inteiro contador = 0
	    
		enquanto(contador < 15) {
		    escreva("\nContador...: ",contador)
		    contador++
		}
	}
	
	funcao exemplo_faca_enquanto() {
	    inteiro numero = 15
	    
	    faca{
	        escreva("\nDecrementando ",numero)
	        numero = numero - 1
	    }enquanto(numero > 0)
	}
	
	funcao exemplo_para() {
	    
	    para(inteiro i = 0; i < 10; i++) {
	        escreva("\nExatamente o número de repetições ", i)
	    }
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 354; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */