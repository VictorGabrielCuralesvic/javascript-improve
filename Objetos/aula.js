

const pessoa = {
    nome: "victor gabriel",
    idade: "20",
    descrever: function () {
        this
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'idade';
/* 
console.log(pessoa['idade']); */

pessoa.altura = 1.78;

/* console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);

pessoa.descrever(); */

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e nasci em ${this.nascimento}`);
    }
}

const gabriel = new Pessoa('gabriel fechine', 20);
/* gabriel.nome = 'Gabriel Fechine';
gabriel.idade = '20' */
const elise = new Pessoa('elise novaes', 20);

new Pessoa('eu', 30).descrever();

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}


console.log(gabriel);
gabriel.descrever();
compararPessoa(gabriel, elise);