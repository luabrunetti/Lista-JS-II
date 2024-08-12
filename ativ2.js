var anoNascimento = Number(prompt("Digite o ano do seu nascimento (YYYY):"));
var anoAtual = Number(prompt("Digite o ano atual (YYYY):"));

let idadeAnos = anoAtual - anoNascimento;
let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 365;
let idadeSemanas = idadeDias / 7;

console.log("Idade em anos: " + idadeAnos);
console.log("Idade em meses: " + idadeMeses);
console.log("Idade em dias: " + idadeDias);
console.log("Idade em semanas: " + idadeSemanas);