
/* FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM.

VOCÊ TERÁ 3 VARIÁVEIS, SENDO ELAS:
1 - PREÇO DO COMBUSTIVEL;
2 - GASTO MÉDIO DE COMBUSTIVEL DO CARRO POR KM;
3 - DISTÂNCIA EM KM DA VIAGEM;

*/
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("Seu carro faz",litrosConsumidos, "por litro!!");
console.log("O total gasto nessa viagem foi de ",valorGasto.toFixed(2), "REAIS");