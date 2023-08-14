// = ELE ATRIBUI
// == ELE IGNORA O TIPO, SE É NUMBER OU STRING
// === ELE PRIORIZA O TIPO QUE ESTÁ DECLARADO - 2 = DOIS -- VAI DAR ERRADO PORQUE 2 NÃO É IGUAL A DOIS


const numero = 0;

const numeroDivisivelPor5= (numero % 5) === 0;

if (numero === 0){
    console.log('O NÚMERO É INVALIDO');

} else if (numeroDivisivelPor5) {
    console.log('SIM');

}else {
    console.log('NÃO');
}