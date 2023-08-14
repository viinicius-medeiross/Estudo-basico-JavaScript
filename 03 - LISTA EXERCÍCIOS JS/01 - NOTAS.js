/*  

1- FAÇA UM ALGOROTIMO QUE DADO ÀS 3 NOTAS TIRADAS DE UM ALUNO EM UM SEMESTRE DA FACULDADE CALCULE E IMPRIMA A SUA MÉDIA E A SUA CLASSIFICAÇÃO CONFORME A TABELA ABAIXO:

MÉDIA = (NOTA 1 + NOTA 2 + NOTA 3) / 3;

CLASSIFICAÇÃO:
- MÉDIA MENOR QUE 5, REPROVAÇÃO;
- MÉDIA ENTRE 5 E 7, RECUPERAÇÃO;
- MÉDIA ACIMA DE 7, PASSOU DE SEMESTRE;

*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log("A MÉDIA BIMESTRAL DO ALUNO É :", media.toFixed(2));

if (media < 5) {
    console.log("REPROVADO!!!");
}

else if (media >= 5 && media <= 7) {
    console.log("RECUPERAÇÃO");

    console.log("PASSOU DE SEMESTRE");
} else {
}
