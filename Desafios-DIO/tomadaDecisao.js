// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

let acaoEscolhida;

// TODO: Implemente uma solução utilizando lógica de programação;
function RPG(acaoEscolhida) {
  while (acaoEscolhida !== 'Atacar' || acaoEscolhida !== 'Fugir') {
    acaoEscolhida = gets();
    
    //TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
    if (acaoEscolhida === 'Atacar') {
      return `${nomePersonagem} escolheu Atacar!`;
    } else if (acaoEscolhida === 'Fugir') {
      return `${nomePersonagem} escolheu Fugir!`
    } else {
      return `Tente novamente`;
    }
    
  }

}

var resultado = RPG(acaoEscolhida);
console.log(resultado);