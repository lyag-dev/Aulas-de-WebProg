function PreencherArray() {
    let resultado = 0
    let nums = [23, 45, 67, 12, 89, 34]

    for (let i = 0; i < nums.length; i++){
        resultado += nums[i]
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}