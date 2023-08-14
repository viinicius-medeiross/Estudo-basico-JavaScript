class Pessoa { //CLASSE É A DEFINIÇÃO DO QUE DEVE CONTER NO OBEJETO
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }


    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} É MAIS VELHO(a) ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} É MAIS VELHO(a) ${p1.nome}`);
    } else {
        console.log(`${p1.nome} E ${p2.nome} TEM A MESMA IDADE`);
    }
}

const vinicius = new Pessoa('Vinícius Medeiros', 20);
const junior = new Pessoa('Junior Medeiros', 47);
const alcione = new Pessoa('Alcione Medeiros', 37);
const lorrane = new Pessoa('Lorrane Medeiros', 18);

console.log(junior);
console.log(alcione);
console.log(vinicius);
console.log(lorrane);


compararPessoas(vinicius,junior);
compararPessoas(lorrane,alcione);
compararPessoas(alcione,junior);
compararPessoas(vinicius,lorrane);





















/*
victor.descrever();
joão.descrever();
vinicius.descrever();







/*class Pessoa { //CLASSE É A DEFINIÇÃO DO QUE DEVE CONTER NO OBEJETO
    nome;
    idade;



    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }

}
const vinicius = new Pessoa(); //ESTANCIA É A OCORÊNCIA DAQUELE OBEJETO ,TENDO OS DADOS DAS VARIÁVEIS DECLARADA NA CLASSE.
    vinicius.nome = 'Vinicius Medeiros';
    vinicius.idade = 20;
    
const mateus = new Pessoa();
    mateus.nome = 'Mateus Santos';
    mateus.idade = 23;
    
const caio = new Pessoa();
    caio.nome = 'Caio Novo Homem';
    caio.idade = 90;
    
const fernandes = new Pessoa();
    fernandes.nome = 'Matheus Responde Mateus ';
    fernandes.idade = 28;

    vinicius.descrever();
    mateus.descrever();
    caio.descrever();
    fernandes.descrever();
*/