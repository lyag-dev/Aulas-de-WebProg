function ContadorJuros() {
    let resultado = ""
    let divida = Number(document.getElementById("divida").value)
    let meses = Number(document.getElementById("meses").value)
    let contador
    let vlr_fnl = divida

    if (meses > 0){
        for (contador=1; contador <= meses; contador++){
            vlr_fnl = vlr_fnl + (divida*(15.30/100))
        }
    } else {
        resultado = String("N. de meses inválido")
    }

    resultado = String("O saldo final é " + "R$" + vlr_fnl)

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}