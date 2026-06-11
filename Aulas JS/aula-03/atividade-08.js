function ContadorFoguete() {
    let resultado = ""

    for (let contador=10; contador >= 1; contador--){
        resultado = resultado + "<br>" + contador;
    }

    resultado = resultado + "<br>" + "FOGO!!!"

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}