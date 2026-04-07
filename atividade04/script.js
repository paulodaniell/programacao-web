const precoGasolina = 6.69;
const precoEtanol = 5.89;
const precoDiesel = 6.20;

const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const calcularAbastecimento = (precoCombustivel, litros) => {
    const total = precoCombustivel * litros;
    document.getElementById("resultado").textContent = formatarMoeda(total);
};

const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const entradaLitros = document.getElementById("litros").value;

    if (!tipo || entradaLitros === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const litros = parseFloat(entradaLitros);

    if (isNaN(litros) || litros <= 0) {
        alert("Digite um número válido e maior que zero!");
        return;
    }

    let precoPorLitro;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            return;
    }

    calcularAbastecimento(precoPorLitro, litros);
};

document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("input", atualizarValor);

document.getElementById("formCombustivel").addEventListener("submit", (e) => {
    e.preventDefault();
    atualizarValor();
});