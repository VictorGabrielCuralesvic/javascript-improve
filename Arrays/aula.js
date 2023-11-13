

const alunos = ['joao','victor','guilherme'];

/* const notas = [10, 9, 9.5]; */

alunos.push('higor');
/* notas.push(9.8); */

alunos[2] = 'gabriel';
alunos[1] = 'andre';

/* alunos.pop(); */

/* console.log(alunos); */
/* console.log(notas); */

const notas = [];

notas.push(9);
notas.push(7.5);

/* const media = (notas[0] + notas[1]) / 2 */

const soma = notas[0] + notas[1];

/* console.log(notas);
console.log(media); */

/* const nome = 'victor gabriel'; */

const nomes = ['victor', 'gabriel', 'higor', 'joao', 'andre'];

for (let i = 0; i < nomes.length; i++) {
    console.log(`${nomes[i]}`);
}

