function ContadorTabuada() {
    let resultado = ""
    let num = Number(document.getElementById("num").value)


    for (let contador=1; contador <= 10; contador++){
        resultado = resultado + contador + " X " + num + " = " + contador*num + "<br>";
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}