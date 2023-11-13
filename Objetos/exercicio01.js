class Carros {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularViagem (distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel;
    }

}

const clio = new Carros('Renault', 'Preto', (1/15));
const siena = new Carros('Fiat', 'Vermelho', (1/10));

console.log(clio.marca);
console.log(clio.cor);
const clioGasto = clio.calcularViagem(50, 5.40);
console.log(clioGasto);

console.log(siena.marca);
console.log(siena.cor);
const sienaGasto = siena.calcularViagem(50, 5.40);
console.log(sienaGasto);