function PreencherArray() {
    let resultado = ""
    let nums = []

    for (let contador=2; contador <= 20; contador += 2) {
        nums.push(contador)
    }

    resultado = nums

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}