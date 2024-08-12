var temperaturaCelsius = Number(prompt("Digite a temperatura em graus Celsius:"));

let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log("A temperatura em graus Fahrenheit é: " + temperaturaFahrenheit.toFixed(2));