// FUNÇÃO SEM SETA
function escrevendoNome(nome) {
    console.log('Meu nome é: ' + nome);
}

function verificacaoIdade(idade) {
    if (idade >= 18) {
        console.log('MINHA IDADE É :' + idade);
        console.log('EU SOU MAIOR DE IDADE');
    } else {
        console.log('MINHA IDADE É :' + idade);
        console.log('EU SOU MENOR DE IDADE');
    }

}
escrevendoNome('vinicius');
verificacaoIdade(20);

escrevendoNome('Carlos');
verificacaoIdade(24);

escrevendoNome('João');
verificacaoIdade(15);

escrevendoNome('Giovanna');
verificacaoIdade(19);


/*  FUNÇÃO COM SETA
const escrevendoNome = (nome,sobreNome) => nome + sobreNome;

(function main() {
    const nome = 'Vinicius';
    const sobreNome = 'Medeiros';

    console.log(escrevendoNome(nome, sobreNome));
})();



*/