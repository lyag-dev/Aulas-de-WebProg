const prompt = require('prompt-sync')();

var compra_vlr = prompt("Digite o valor da compra: ")

if (compra_vlr >= 100) {
    compra_vlr = compra_vlr - (compra_vlr * 0.1)
    console.log(" valor final da compra com o desconto é de:", compra_vlr)
} else {
    console.log("O valor da compra é de:", compra_vlr)
}