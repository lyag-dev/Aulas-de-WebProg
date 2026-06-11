function DefinirFxEtaria() {
    let resultado = ""

    var idade = Number(document.getElementById("idade").value)

    if (idade > 0) {
        switch (true) {
            case idade >= 0 && idade < 13:
                resultado = String("Faixa etária: Criança.")
                break;
            case idade >= 13 && idade < 18:
                resultado = String("Faixa etária: Adolescente.")
                break;
            case idade >= 18 && idade < 60:
                resultado = String("Faixa etária: Adulto.")
                break;
            case idade >= 60:
                resultado = String("Faixa etária: Idoso.")
                break;
        }
    } else {
        resultado = String("idade inválida.")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}