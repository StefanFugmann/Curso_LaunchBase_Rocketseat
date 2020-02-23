const name = "João";
const peso = 100;
const altura = 1.8;
const sexo = "masculino";

const imc = peso / (altura * altura);

// console.log(imc);
if (imc >= 30) {
  console.log(`${name} vc está acima do peso.`);
} else {
  console.log(`${name} você não está acima do peso.`);
}
