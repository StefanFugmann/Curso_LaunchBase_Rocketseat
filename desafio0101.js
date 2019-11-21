const name = "Carlos";
const peso = 84;
const altura = 1.88;
const sexo = "masculino";

const imc = peso / (altura * altura);

// console.log(imc);
if (imc >= 30) {
  console.log("Carlos vc está acima do peso.");
} else {
  console.log("Carlo você não está acima do peso.");
}
