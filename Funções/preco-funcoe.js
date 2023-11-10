
// 1 - Débito - 0,10
// 2 - Pix - 0,15
// 3 - Duas vezes
// 4 - Acima três vezes + 0,10

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)));   
}

function mostrarPreco(precoEtiqueta, metodoDePagamento) {
    if (metodoDePagamento === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (metodoDePagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if (metodoDePagamento === 3) {
        console.log(precoEtiqueta);
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
}

function main() {
    let precoEtiqueta = 50;
    const metodoDePagamento = 2;
    mostrarPreco(precoEtiqueta, metodoDePagamento);
}

main();
