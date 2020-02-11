const classA = [
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
  },
  {
    nome: "Regina",
    nota: 4.5
  },
  {
    nome: "Arthur",
    nota: 3.5
  }
];

const classB = [
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
  let soma = 0;

  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }
  const media = soma / alunos.length;

  return media;
}

const media1 = calculaMedia(classA);
const media2 = calculaMedia(classB);

enviaMensagem(media1, "turmaA");
enviaMensagem(media2, "turmaB");

function enviaMensagem(media, turma) {
  if (media > 6) {
    console.log(`A média da turma ${turma} foi ${media.toFixed(2)}. Parabéns!`);
  } else {
    console.log(
      `A média da turma ${turma} foi ${media.toFixed(
        2
      )}, que é menor que a média 6 exigida para passar. Teram que se esforçar mais.`
    );
  }
}

function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 6) {
    aluno.reprovado = true;
  }
}

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} está reprovado!`);
  }
}

function alunosReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno);
  }
}

alunosReprovado(classA);
alunosReprovado(classB);
