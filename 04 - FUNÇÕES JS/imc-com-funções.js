function comentarioCode() {
    /* 02 - O IMC - INDICE DE MASSA COMPORAL É UM CRITÉRIO DA ORGANIZAÇÃO MUNDIAL DE SAÚDE PARA DAR UMA INDICAÇÃO SOBRE A CONDIÇÃO DE PESO DE UMA PESSOA ADULTA.
    
    FORMULA DO IMC:
    IMC = peso / (altura * altura);
    
    ELABORE UM ALGORITIMO QUE DADO PESO E ALTURA DE UM ADULTO MOSTRE SUA CONDIÇÃO DE ACORDO COM A TABELA ABIXO
    
    IMC EM ADULTOS - CONDIÇÃO:
    
    - ABAIXO DE 18.5 - ABAIXO DO PESO;
    - ENTRE 18.5 E 25 - PESO NORMAL;
    - ENTRE 25 E 30 - ACIMA DO PESO;
    - ENTRE 30 E 40 - OBESO;
    - ACIMA DE 40 - OBESIDADE GRAVE;
    */

}

function calcularImc(peso, altura) {
    return peso / (altura * altura);
    // OU Math.pow(altura,2); = (altura * altura)
}

function classificarImc(imc) {

    if (imc < 18.5) {

        return "ABAIXO DO PESO!!";

    } else if (imc >= 18.5 && imc < 25) {

        return "PESO NORMAL!!";

    } else if (imc >= 25 && imc < 30) {

        return "ACIMA DO PESO!!";

    } else if (imc >= 30 && imc <= 40) {

        return "OBESO!!";

    } else {

        return "OBESIDADE GRAVE";
    }
}

(function main() {
    const peso = 90;
    const altura = 1.50;

    const imc = calcularImc(peso, altura);
    console.log("O IMC DO ALUNO É :", imc.toFixed(2));
    console.log(classificarImc(imc));
})();
     //main();

/*COM AS "(CHAVES)" NA FUNCTION ELA SE TORNA PRIORIDADE
 AO RODAR O CÓDIGO E É A PRIMEIRA FUNÇÃO A SER RODADA, OU SEJA, NÃO PRECISA CHAMAR NO FINAL O "main();"

*/
