function PreencherArray() {
    let resultado = ""
    let nums = [23, 45, 67, 12, 8.9, 34]

    resultado = (String("este é o maior número: " + Math.max(...nums)))

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}