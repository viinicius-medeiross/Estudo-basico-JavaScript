/* 
3 - ELABORE UM ALGORITIMO QUE CALCULE O QUE DEVE SER PAGO 
POR UM produto, CONSIDERANDO O PREÇO NORMAL DE ETIQUETA E
A ESCOLHA DA CONDIÇÃO DE PAGAMENTO.

 UTILIZE OS CODIGOS  DE TABELA A SEGUIR PARA LER QUAL A 
 CONDIÇÃO DE PAGAMENTO ESCOLHIDA E EFETUAR O CÁLCULO ADEQUADO.
 
 
 CÓDIGO - CONDIÇÃO DE PAGAMENTO:
 1 - À VISTA DÈBITO, RECEBE 10% DE DESCONTO;
 2 - À VISTA NO DINHEIRO OU PIX, RECEBE 15% DE DESCONTO;
 3 - EM DUAS VEZES, PREÇO NORMAL DE ETIQUETA SEM JUROS;
 4 - ACIMA DE DUAS VEZES, PREÇO NORMAL DE EQIQUETA MAIS JUROS DE 10%

*/
function aplicarDesconto(valor,desconto) {
    return (valor - (valor * (desconto /100)));

}
function aplicarJuros(valor,juros) {
    return (valor + (valor * (juros /100)));

}



const precoEtiqueta = 100;
const FormaPagamento = 4;

if (FormaPagamento === 1) {
    console.log("FORMA DE PAGAMENTO DÉBITO ESCOLHIDA. DESCONTO DE 10% APLICADO : R$",aplicarDesconto(precoEtiqueta,10));

} else if (FormaPagamento === 2) {
    console.log("FORMA DE PAGAMENTO DINHEIRO/PIX ESCOLHIDA. DESCONTO DE 15% APLICADO : R$",aplicarDesconto(precoEtiqueta,15));

} else if (FormaPagamento === 3) {
    console.log("FORMA DE PAGAMENTO EM DUAS VEZES ESCOLHIDA. SEM DESCONTO: R$",precoEtiqueta);

} else if (FormaPagamento === 4) {
    console.log("FORMA DE PAGAMENTO ACIMA DE 2 VEZES ESCOLHIDA. ACRÉSCIMO DE 10% APLICADO :",aplicarJuros(precoEtiqueta,10));
    
}

//console.log(200 * 0.10); = 20
//console.log(10 /100); = 0.1
