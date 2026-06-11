function DefinirFxEtaria() {
    const var_permitidas = ["L", "10", "12", "14", "16", "18"]
    let resultado = ""

    var fx_etaria = String(document.getElementById("fx_etaria").value)

    if (var_permitidas.includes(fx_etaria)) {
        switch (fx_etaria) {
            case "L":
                resultado = String("A mídia é livre para todos os públicos")
                break;
            case "10":
                resultado = String("A mídia é aconcelhada apenas para maiores de 10 anos")
                break;
            case "12":
                resultado = String("A mídia é aconcelhada apenas para maiores de 12 anos")
                break;
            case "14":
                resultado = String("A mídia é aconcelhada apenas para maiores de 14 anos")
                break;
            case "16":
                resultado = String("A mídia é aconcelhada apenas para maiores de 16 anos")
                break;
            case "18":
                resultado = String("A mídia é aconcelhada apenas para maiores de 18 anos")
                break;
        }
    } else {
        resultado = String("Faixa etária escolhido inválido.")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}