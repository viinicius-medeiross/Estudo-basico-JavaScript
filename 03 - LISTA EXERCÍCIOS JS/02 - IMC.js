/* 

02 - O IMC - INDICE DE MASSA COMPORAL É UM CRITÉRIO DA ORGANIZAÇÃO MUNDIAL DE SAÚDE PARA DAR UMA INDICAÇÃO SOBRE A CONDIÇÃO DE PESO DE UMA PESSOA ADULTA.

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

const peso = 90;
const altura = 1.50;

const imc = peso / (altura * altura);
console.log("O IMC DO ALUNO É :",imc.toFixed(2));
//Math.pow(altura,2); = (altura * altura)

if (imc < 18.5) {

    console.log("ABAIXO DO PESO!!");

} else if (imc >= 18.5 && imc < 25 ) {

    console.log("PESO NORMAL!!");

}else if (imc >= 25 && imc < 30) {

    console.log("ACIMA DO PESO!!");

}else if (imc >= 30 && imc <= 40) {

    console.log("OBESO!!");

}else{

    console.log("OBESIDADE GRAVE!!");
}
