function CalcularResultado() {
    var nota1 = Number(document.getElementById("nota1").value)
    var nota2 = Number(document.getElementById("nota2").value)
    var nota3 = Number(document.getElementById("nota3").value)
    var media = Number((nota1+nota2+nota3)/3)
    let resultado = ""

    if (media >= 0 && media < 6) {
        resultado = String(("O aluno foi reprovado com média: " + media))
    }else if (media >= 6 && media < 10) {
        resultado = String(("O aluno foi aprovado com média: " + media))
    }else if (media == 10) {
        resultado = String(("O aluno foi aprovado com distinção, com a incrível média: " + media))
    }else {
        resultado = String(("o valor da média final é inválido, provavelmente devido a um erro no valor das notas."))
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}
