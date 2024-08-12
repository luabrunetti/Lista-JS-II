var convidados = 45;
var litrosChopp = 300;

let litrosDesperdicados = Number(prompt("Digite a quantidade de litros de chopp desperdiçados (digite 0 se não houve desperdício):"));
let litrosSobraram = Number(prompt("Digite a quantidade de litros de chopp que sobraram (digite 0 se não sobrou chopp):"));

let litrosConsumidos = litrosChopp - litrosDesperdicados - litrosSobraram;
let mediaLitrosPorPessoa = litrosConsumidos / convidados;

console.log("A média de litros bebidos por pessoa na festa foi de: " + mediaLitrosPorPessoa.toFixed(2) + " litros");