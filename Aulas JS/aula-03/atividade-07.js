function Contador1a100() {
    let resultado = ""

    for (let contador=1; contador <=100; contador++){
        resultado = resultado + "<br>" + contador;
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}