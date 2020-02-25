/* Criar um programa que calcule a média
 das turmas de alunos e enviar
 mensagem do cáuculo da média.
*/

const alunosDaTurmaA = [
  {
    nome: "Stefan",
    nota: 6
  },
  {
    nome: "Fernanda",
    nota: 5.5
  },
  {
    nome: "Rafael",
    nota: 2.5
  }
];

const alunosDaTurmaB = [
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

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

enviaMensagem(media1, "turmaA");
enviaMensagem(media2, "turmaB");

function enviaMensagem(media, turma) {
  if (media > 6) {
    console.log(`A média da ${turma} foi ${media}. Parabéns!`);
  } else {
    console.log(
      `A média da ${turma} foi ${media}, que é menor que a média 6 exigida para passar. Teram que se esforçar mais.`
    );
  }
}
