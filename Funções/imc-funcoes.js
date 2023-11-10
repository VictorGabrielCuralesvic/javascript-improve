function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "acima do peso";
    } else if (imc >= 30 && imc < 40) {
        return "obeso";
    } else {
        return "obesidade grave";
    }
}

function main() {
    const peso = 100;
    const altura = 1.78;
    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
}

main();