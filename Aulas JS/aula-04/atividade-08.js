function Cities() {
    let resultado = ""
    let NumCity = Number(document.getElementById("NumCity").value)
    let cidades = []
    let contador

    if (NumCity > 0){
        for (contador=1; contador <= NumCity; contador++){
            cidades[contador] = parseFloat(prompt("Digite a cidade: "));
        }
    } else {
        resultado = String("N. de notas inválido")
    }

    resultado = String("A primeira cidade foi :" + cidades(0) + ". A última cidade foi : " + cidades(-1))

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}