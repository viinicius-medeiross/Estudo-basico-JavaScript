/*
2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso /(altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José  para dizer 
o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC() {

        const imc = this.calcularIMC().toFixed(2);

        if (imc < 18.5) {
            return("ABIAXO DO PESO");
        } else if (imc >= 18.5 && imc < 25) {
            return("PESO NORMAL");
        } else if (imc >= 25 && imc < 30) {
            return("ACIMA DO PESO");
        } else if (imc >= 30 && imc < 40) {
            return("OBESO");
        } else {
            return("OBESIDADE GRAVE");
        }

        /*IMC EM ADULTOS - CONDIÇÃO:
            
        - ABAIXO DE 18.5 - ABAIXO DO PESO;
        - ENTRE 18.5 E 25 - PESO NORMAL;
        - ENTRE 25 E 30 - ACIMA DO PESO;
        - ENTRE 30 E 40 - OBESO;
        - ACIMA DE 40 - OBESIDADE GRAVE;
        */
    }
}
const jose = new Pessoa('josé', 75, 1.75);
const vinicius = new Pessoa('Vinicius', 97, 1.98);

console.log(jose, `O IMC DE ${jose.nome} É:`, jose.calcularIMC().toFixed(2),"RESULTADO :",jose.classificarIMC());
console.log(vinicius, `O IMC DE ${vinicius.nome} É : `, vinicius.calcularIMC().toFixed(2),"RESULTADO :",vinicius.classificarIMC());
