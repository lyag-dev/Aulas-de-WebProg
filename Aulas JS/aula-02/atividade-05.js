function DefinirNota() {
    const var_permitidas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let resultado = ""

    var nota = Number(document.getElementById("nota").value)

    if (var_permitidas.includes(nota)) {
        switch (nota) {
            case nota >= 9:
                resultado = String("O aluno tirou nota A.")
                break;
            case nota >= 7 && nota < 9:
                resultado = String("O aluno tirou nota B.")
                break;
            case nota >= 5 && nota < 7:
                resultado = String("O aluno tirou nota C.")
                break;
            case nota >= 3 && nota < 5:
                resultado = String("O aluno tirou nota D.")
                break;
            case nota >= 0 && nota < 3:
                resultado = String("O aluno tirou nota F.")
                break;
        }
    } else {
        resultado = String("Nota inválida.")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}