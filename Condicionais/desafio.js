const precoEtanol = 3.64;
const precoCombustivel = 5.80;
let tipoCombustível = 'Combustível';
const gastoMedio = 10
const distancia = 50;

const litrosConsumidos = distancia / gastoMedio;

if (tipoCombustível === 'Etanol') {
    const valorGastoEtanol = precoEtanol * litrosConsumidos;
    console.log(valorGastoEtanol);
} else if (tipoCombustível === 'Combustível') {
    const valorGastoCombus = precoCombustivel * litrosConsumidos;
    console.log(valorGastoCombus);
} else {
    console.log("Não foi abastecido");
}