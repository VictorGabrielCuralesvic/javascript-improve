

const numeros = []

numeros.push(0);
numeros.push(2);
numeros.push(8);
numeros.push(5);
numeros.push(11);
numeros.push(16);

console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
    if ((numeros[i] % 2) === 0) {
        console.log(`${numeros[i]} é par`);
    } else {
        console.log(`${numeros[i]} não é par`);
    }
}