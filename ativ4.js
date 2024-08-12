var totalEleitores = Number(prompt("Digite o número total de eleitores:"));
var votosCandidatoX = Number(prompt("Digite o número de votos do candidato X:"));
var votosCandidatoY = Number(prompt("Digite o número de votos do candidato Y:"));
var votosBrancos = Number(prompt("Digite o número de votos brancos:"));
var votosNulos = Number(prompt("Digite o número de votos nulos:"));

let percentualCandidatoX = (votosCandidatoX / totalEleitores) * 100;
let percentualCandidatoY = (votosCandidatoY / totalEleitores) * 100;
let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;

console.log("Percentual de votos do candidato X: " + percentualCandidatoX.toFixed(2) + "%");
console.log("Percentual de votos do candidato Y: " + percentualCandidatoY.toFixed(2) + "%");
console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");