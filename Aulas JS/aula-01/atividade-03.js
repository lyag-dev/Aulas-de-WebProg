const prompt = require('prompt-sync')();

var idade = prompt("Digite a sua idade: ")
let fx_etaria = String();

if (idade >= 0 && idade < 13) {
    fx_etaria = "Criança"
    console.log("Sua faixa etária é:", fx_etaria)
} else if (idade >= 13 && idade < 18) {
    fx_etaria = "Adolescente"
    console.log("Sua faixa etária é:", fx_etaria)
} else if (idade >= 18 && idade < 60) {
    fx_etaria = "Adulto"
    console.log("Sua faixa etária é:", fx_etaria)
}else if (idade > 60) {
    fx_etaria = "Idoso"
    console.log("Sua faixa etária é:", fx_etaria)
} else{
    console.log("Esta é uma idade inválida!!")
}