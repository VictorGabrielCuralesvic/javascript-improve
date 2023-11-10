const numero = 0;
const eNumeroPar = (numero % 2) === 0; // utilizar sempre ===

/* console.log(eNumeroPar); */

if (numero === 0) {
    console.log("número inválido");
} else if (eNumeroPar) {
    console.log("é par");
} else {
    console.log("é impar");
}