function ContadorModularPar() {
    let resultado = ""
    let num = Number(document.getElementById("num").value)

    if (num > 0){
        for (let contador=1; contador <= num; contador++){
            if (contador%2 == 0)
                resultado = resultado + "<br>" + contador;
        }
    } else {
        resultado = String("Número inválido.")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}