function ContadorModular() {
    let resultado = ""
    let num = Number(document.getElementById("num").value)

    if (num > 0){
        for (let contador=1; contador <= num; contador++){
            resultado = resultado + "<br>" + contador;
        }
    } else {
    for (let contador=1; contador >= num; contador--){
        resultado = resultado + "<br>" + contador;
    }
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}