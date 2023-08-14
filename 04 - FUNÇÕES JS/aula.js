function teste() {
    console.log('teste');
}

teste();
teste();
teste();
teste();

/* *********************************************************************  */

function sayMayName(name) {
    console.log('Your Name Is :' + name)
}

sayMayName('Vinícius');
sayMayName('Medeiros');

/* *********************************************************************  */

function quadrado(valor) {
    return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log('O PRODUTO DESSA FUNÇÃO É: ', quadradoDeDez + quadradoDeDez);

function incrementarJuros(valor, porcentualJuros) { //VALOR:100,PJ:10
    const valorDeAcrescimo = (porcentualJuros / 100) * valor; // 10 /100 = 0.1 * 100 = 10
    return valor + valorDeAcrescimo; // 100 
}
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));

/* *************************************************************** */

