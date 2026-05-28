const prompt = require('prompt-sync')();

var pwd =  prompt("Digite a senha!! ")

if (pwd == 1234){
    console.log("Acesso liberado!")
} else {
    console.log("acesso negado!")
}