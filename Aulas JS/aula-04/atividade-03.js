var frutas

function Frutas() {
    let resultado = ""
    let fruta1 = (document.getElementById("fruta1").value)
    let fruta2 = (document.getElementById("fruta2").value)
    let fruta3 = (document.getElementById("fruta3").value)
    let fruta4 = (document.getElementById("fruta4").value)
    let fruta5 = (document.getElementById("fruta5").value)
    frutas = [fruta1, fruta2, fruta3, fruta4, fruta5]

    resultado = frutas;

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}

function NvFruta() {
    let resultado = ""
    let nv_fruta = (document.getElementById("nv_fruta").value)

    frutas.shift()
    frutas.push(nv_fruta)

    resultado = frutas

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}