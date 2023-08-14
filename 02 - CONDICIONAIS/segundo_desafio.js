//********************************************************* */


/* FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM.

VOCÊ TERÁ 5 VARIÁVEIS, SENDO ELAS:
1 - PREÇO DO ETANOL;
2 - PREÇO GASOLINA;
3 - O TIPO DE COMBUSTÍVEL QUE ESTÁ NO SEU CARRO;
4 - GASTO MÉDIO DE COMBUSTIVEL DO CARRO POR KM;
5 - DISTÂNCIA EM KM DA VIAGEM;

*/

//IMPRIMA NO CONSOLE O VALOR QUE SERÁ GASTO PARA REALIZAR ESTA VIAGEM

const precoEtanol = 4.99;
const precoGasolina = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const isTipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (isTipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log("Valor do", isTipoCombustivel, "É", precoGasolina);

    console.log("Seu carro faz", litrosConsumidos.toFixed(2), "por litro com",isTipoCombustivel );
    console.log("O total gasto nessa viagem foi de ", valorGasto.toFixed(2), "REAIS");


} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log("Valor do", isTipoCombustivel, "É", precoEtanol);

    console.log("Seu carro faz", litrosConsumidos.toFixed(2), "por litro com", isTipoCombustivel);
    console.log("O total gasto nessa viagem foi de ", valorGasto.toFixed(2), "REAIS");

}