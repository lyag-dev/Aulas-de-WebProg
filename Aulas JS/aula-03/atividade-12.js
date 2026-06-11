function ContadorTabuada() {
    let resultado = ""
    let num = Number(document.getElementById("num").value)
    let limite = Number(document.getElementById("limite").value)

    if (limite > 0){
        for (let contador=1; contador <= limite; contador++){
            resultado = resultado + contador + " X " + num + " = " + contador*num + "<br>";
        }
    } else {
        resultado = String("Limite inválido")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}