function DefinirMes() {
    const var_permitidas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let resultado = ""

    var meses = Number(document.getElementById("meses").value)

    if (var_permitidas.includes(meses)) {
        switch (meses) {
            case 1:
                resultado = String("O mês definido é jáneiro.")
                break;
            case 2:
                resultado = String("O mês definido é fevereiro.")
                break;
            case 3:
                resultado = String("O mês definido é março.")
                break;
            case 4:
                resultado = String("O mês definido é abril.")
                break;
            case 5:
                resultado = String("O mês definido é maio.")
                break;
            case 6:
                resultado = String("O mês definido é junho.")
                break;
            case 7:
                resultado = String("O mês definido é julho.")
                break;
            case 8:
                resultado = String("O mês definido é agosto.")
                break;
            case 9:
                resultado = String("O mês definido é setembro.")
                break;
            case 10:
                resultado = String("O mês definido é outubro.")
                break;
            case 11:
                resultado = String("O mês definido é novembro.")
                break;
            case 12:
                resultado = String("O mês definido é dezembro.")
                break;
        }
    } else {
        resultado = String("Número inválido escolhido.")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}