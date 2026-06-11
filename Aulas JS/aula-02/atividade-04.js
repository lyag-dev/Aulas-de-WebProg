function DefinirFruta() {
    const var_permitidas = String(["abacaxi", "acerola", "araçá", "açai", "abacate", "amora", "ameixa", "atemoia"])
    let resultado = ""

    var frutas = String(document.getElementById("frutas").value)

    if (var_permitidas.includes(frutas)) {
        switch (frutas) {
            case "abacaxi":
                resultado = String("O abacaxi é uma fruta tropical nativa da América do Sul, caracterizada por sua casca espinhosa, uma coroa de folhas e polpa suculenta de sabor doce e ácido.")
                break;
            case "acerola":
                resultado = String("A acerola (também conhecida como cereja-do-pará) é o fruto da aceroleira (Malpighia emarginata), um arbusto nativo da América Central e do Sul.")
                break;
            case "araçá":
                resultado = String("O araçá é um fruto brasileiro nativo da família Myrtaceae (a mesma da goiaba e da jabuticaba).")
                break;
            case "açai":
                resultado = String("O açaí é um fruto de casca roxa escura produzido pelo açaizeiro (Euterpe oleracea), uma palmeira nativa da Amazônia.")
                break;
            case "abacate":
                resultado = String("O abacate é o fruto do abacateiro (Persea americana), uma árvore nativa do México e da América Central.")
                break;
            case "amora":
                resultado = String("A amora é uma fruta pequena e rica em nutrientes, famosa pelo seu sabor doce com um toque acidulado.")
                break;
            case "ameixa":
                resultado = String("A ameixa é o fruto da ameixeira (gênero Prunus), parente próxima do pêssego e da cereja.")
                break;
            case "atemoia":
                resultado = String("A atemoia é uma fruta híbrida originária do cruzamento entre a cherimoia e a fruta-do-conde (pinha). Muito apreciada por sua polpa branca, extremamente cremosa e sabor muito doce.")
                break;
        }
    } else {
        resultado = String("Não conheço nada sobre esse fruto.")
    }

    let DivResultado = document.getElementById("resultado")
    DivResultado.style.display = "block";
    DivResultado.innerHTML = `
    <p>${resultado}</p>
    `;
}