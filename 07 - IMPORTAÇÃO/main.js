const { gets, print, entradas } = require('./funções-auxiliares');

/*FORMA 1 DE FAZER ESSA RESOLUÇÃO
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
    
}
let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(numerosSorteados);
console.log("MAIOR NÚMERO É :", maiorValor);*/

/*RESOLUÇAO ATIVIDADE

 Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
 Faça um programa que receba os 5 números sorteadosnpara os alunos e mostre o maior número.

 Dados de entrada:

 5
 50
 10
 98
 23

 Saída:
 98
*/

/*FORMA 2 DE FAZER A RESOLUÇÃO*/


let maiorValorEncontrado = 0;

for (let i = 0; i < entradas.length; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }

}
print(entradas);
console.log("MAIOR NÚMERO É :", maiorValorEncontrado);
