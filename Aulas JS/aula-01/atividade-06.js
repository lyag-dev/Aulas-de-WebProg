const prompt = require('prompt-sync')();

var nota1 = Number(prompt("Digite o valor da primeira nota: "))
var nota2 = Number(prompt("Digite o valor da segunda nota: "))
var media = Number((nota1+nota2)/2)

if (media >= 0 && media < 6) {
    console.log ("O aluno foi reprovado com média:", media)
}else if (media >= 6 && media < 10) {
    console.log ("O aluno foi aprovado com média:", media)
}else if (media == 10) {
    console.log ("O aluno foi aprovado com distinção, com a incrível média:", media)
}else {
    console.log ("o valor da média final é inválido, provavelmente devido a um erro no valor das notas.")
}