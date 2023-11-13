class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return `meu IMC é ${parseInt(this.peso / (this.altura * this.altura))}`;
    }
}

const José = new Pessoa('José', 70, 1.75);
const imcJose = José.calcularImc();

console.log(José.nome);
console.log(imcJose);

