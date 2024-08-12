var quantidadePlastico = Number(prompt("Digite a quantidade em kg de plástico a ser entregue:"));
var quantidadePapel = Number(prompt("Digite a quantidade em kg de papel a ser entregue:"));
var quantidadeMetal = Number(prompt("Digite a quantidade em kg de metal a ser entregue:"));

const valorPlastico = 2.00;
const valorPapel = 3.00;
const valorMetal = 5.00;

let totalPlastico = Math.floor(quantidadePlastico / 10) * valorPlastico;
let totalPapel = Math.floor(quantidadePapel / 30) * valorPapel;
let totalMetal = Math.floor(quantidadeMetal / 50) * valorMetal;

let totalRecebido = totalPlastico + totalPapel + totalMetal;

console.log("O valor total a ser recebido é: R$" + totalRecebido.toFixed(2));