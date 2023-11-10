let precoEtiqueta = 50;
const metodoDePagamento = 2; 
// 1 - Débito
// 2 - Pix
// 3 - Duas vezes
// 4 - Acima três vezes

if (metodoDePagamento === 1) {
    precoEtiqueta = (precoEtiqueta - (precoEtiqueta * 0.1));
    console.log(precoEtiqueta);
} else if (metodoDePagamento === 2) {
    precoEtiqueta = (precoEtiqueta - (precoEtiqueta * 0.15));
    console.log(precoEtiqueta);
} else if (metodoDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    precoEtiqueta = (precoEtiqueta + (precoEtiqueta * 0.1));
    console.log(precoEtiqueta);
}