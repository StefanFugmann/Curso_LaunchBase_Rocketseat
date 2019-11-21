/* Criar um programa que calcule a média
 das notas entre os alunos e enviar
 mensagem do cáuculo da média.
*/

// arrys

const alunos = [
  {
    nome: "Jayce",
    nota: 10
  },
  {
    nome: "Raphaele",
    nota: 9.9
  },
  {
    nome: "Rodrigo",
    nota: 8.5
  }
];

// const aluno01 = {
//   nome: "Stefan",
//   nota: 9.8
// };

// const aluno02 = {
//   nome: "Fernanda",
//   nota: 8.9
// };

// const aluno03 = {
//   nome: "Rafael",
//   nota: 4.5
// };

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

if (media > 6) {
  console.log(`A média da turma foi ${media}. Parabéns!`);
} else {
  console.log("A média foi menor qua 6.");
}
