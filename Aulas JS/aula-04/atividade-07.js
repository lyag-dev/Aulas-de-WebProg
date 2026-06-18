function CalcMed() {
    let resultado = ""
    let NumNotas = Number(document.getElementById("NumNotas").value)
    let notas = []
    let somafunf = Number()
    let aprovacao = ""
    let contador

    if (NumNotas > 0){
        for (contador=1; contador <= NumNotas; contador++){
            notas[contador] = parseFloat(prompt("Digite a nota: "));
            somafunf = somafunf + notas[contador]
        }
    } else {
        resultado = String("N. de notas inválido")
    }

    if (somafunf/(contador-1) >= 6) {
        aprovacao = String("Aprovado.")
    } else {
        aprovacao = String("Reprovado.")
    }

    resultado = String("A média é " + somafunf/(contador-1) + ". O aluno está " + aprovacao)

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}