const name = "Silvana";
const sexo = "M";
const idade = 65;
const contribuicao = 20;
const contribuicaoTotal = idade + contribuicao;

const aposentaHomem = sexo == "M" && contribuicaoTotal >= 95;
const aposentaMulher = sexo == "F" && contribuicaoTotal >= 85;

if (aposentaHomem) {
  console.log(`${name}, pode se aposentar.`);
}
if (aposentaMulher) {
  console.log(`${name}, pode se aposentar.`);
} else {
  console.log("Você ainda não pode se aposentar.");
}
