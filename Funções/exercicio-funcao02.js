/* import { meuNome } from "./exercicio-funcao01"; */

function escreverNome(Nome) {
    return Nome;
}

escreverNome('victor');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('victor') + ' é de maior');
    } else {
        console.log(escreverNome('victor') + ' é de menor');
    }
}

verificarIdade(20);