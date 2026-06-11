function ContadorJuros() {
    let resultado = ""
    let dep_vlr = Number(document.getElementById("dep_vlr").value)
    let meses = Number(document.getElementById("meses").value)
    let contador
    let vlr_fnl = 0

    if (meses > 0){
        for (contador=1; contador <= meses; contador++){
            vlr_fnl = vlr_fnl + dep_vlr+(vlr_fnl*0.5/100)
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