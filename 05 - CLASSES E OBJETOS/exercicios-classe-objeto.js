/*
1- CRIE UMACLASSE PARA REPRESENTAR CARROS.
OS CARROS POSSUEM UMA MARCA, UMA COR E UM GASTO MEDIO DE COMBUSTÍVEL
POR KILOMETRO RODADO.
CRIE UM METODO QUE DADO A QUANTIDADE DE QUILOMETROS E O PREÇO 
DO COMBUSTIVEL NOS DE O VALOR 
GASTO EM REIAIS PAARA REALIZAR ESTE PERCURSO
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm = 13;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;

    }
}

const gol = new Carro('Volks', 'Prata', 1 / 12);
const palio = new Carro('Fiat', 'Azul', 1 / 11);


console.log(gol,"GASTO TOTAL PARA ESSA VIAGEM ESTIMADO EM : R$", gol.calcularGastoDePercurso(70, 5.59).toFixed(2));
console.log(palio,"GASTO TOTAL PARA ESSA VIAGEM ESTIMADO EM : R$", palio.calcularGastoDePercurso(1000, 5.59).toFixed(2));
