const prompt = require('prompt-sync')();

var num = prompt("Digite um número: ")

if (num < 0) {
    console.log("O número é negativo!!")
} else if (num > 0){
    console.log("O número é positivo!!")
}else {
    console.log("O número zero não é nem negativo nem positivo, sendo o elemento neutro na soma.")
}