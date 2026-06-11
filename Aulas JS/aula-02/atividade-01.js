function DefinirMetodoDePagamento() {
    const N_permitidos = [1, 2, 3]
    let resultado = ""

    var met_pag = Number(document.getElementById("met_pag").value)

    if (N_permitidos.includes(met_pag)) {
        switch (met_pag) {
            case 1:
                resultado = String("O método de pagamento escolhido foi DÉBITO.")
                break;
            case 2:
                resultado = String("O método de pagamento escolhido foi CRÉDITO.")
                break;
            case 3:
                resultado = String("O método de pagamento escolhido foi DINHEIRO.")
                break;
        }
    } else {
        resultado = String("Número escolhido inválido.")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}
