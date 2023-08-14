const vinicius = {
    nome: 'Vinicius Medeiros',
    idade: 20,

    descrever: function(){
       console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    
    }
};
console.log(vinicius.descrever());

const atributo = 'idade';

console.log(vinicius[atributo]);







/*
vinicius.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

vinicius.descrever();

/*console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor);*/

/*vitor.altura =1.98;

console.log(vitor);*/
