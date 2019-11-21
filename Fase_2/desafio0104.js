const funcionario = {
  nome: "Stefan",
  idade: 32,
  tecnologia: [
    {
      nome: "C++",
      especialidade: "Desktop"
    },
    {
      nome: "Python",
      especialidade: "Data Science"
    },
    {
      nome: "JavaScript",
      especialidade: "Web/Mobile"
    }
  ]
};

console.log(
  `O usuário ${funcionario.nome} tem ${funcionario.idade} anos e usa a tecnologia ${funcionario.tecnologia[0].nome} em ${funcionario.tecnologia[0].especialidade}.`
);
