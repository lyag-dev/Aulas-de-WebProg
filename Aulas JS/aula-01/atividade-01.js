const prompt = require('prompt-sync')();

var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o segundo número: ");

var maior = Math.max(num1, num2);

if (num1 === num2) {
    console.log("Os números são iguais.");
} else {
    console.log("O maior número é: " + maior);
}