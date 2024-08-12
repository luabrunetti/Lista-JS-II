var peso = Number(prompt("Digite seu peso em quilogramas:"));
var altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));