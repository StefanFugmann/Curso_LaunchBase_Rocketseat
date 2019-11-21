const usuarios = [
  {
    nome: "Carlos",
    tecnologias: ["HTML", "CSS"]
  },
  {
    nome: "Jasmine",
    tecnologias: ["JavaScript", "CSS"]
  },
  {
    nome: "Tuane",
    tecnologias: ["HTML", "Node.js"]
  }
];

// function chaceDeUsuarioUsaCSS(usuario) {
//   let skill = 0;
//   for (let user = 0; user == usuario.length; user++) {
//     skill = skill + usuario[user].tecnologias;
//     console.log(skill);
//   }
// }

// for (let usuario of usuarios) {
//   console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`);
// }

// for (let i = 0; i < usuarios.length; i++) {
//   console.log(
//     `${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}`
//   );
// }

function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == "CSS") {
      return true;
    }
  }
  return false;
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}
