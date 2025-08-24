let soma = []
let somaFinal = 1400;
let resumo = document.querySelector('#lista-produtos section');
let total = document.getElementById('valor-total');
function adicionar() {
    let selProduto = document.getElementById('produto').selectedIndex;
    let quant = parseInt(document.getElementById('quantidade').value);
    let quantComp = document.getElementById('quantidade').value.length;
    if (quantComp == 0 || quant < 1 || quant > 100) {
        window.alert('Informe uma quantidade válida antes de adicionar.')
    } else {
        switch (selProduto) {
            case 0:
                resumo.innerHTML += `<p><span class="texto-azul">${quant}x </span>Fone de ouvido<span class="texto-azul"> R$${100 * quant}</span></p>`;
                somaFinal += (100 * quant);
                break;
            case 1:
                resumo.innerHTML += `<p><span class="texto-azul">${quant}x </span>Celular<span class="texto-azul"> R$${1400 * quant}</span></p>`;
                somaFinal += (1400 * quant);
                break;
            case 2:
                resumo.innerHTML += `<p><span class="texto-azul">${quant}x </span>Oculus VR<span class="texto-azul"> R$${5000 * quant}</span></p>`;
                somaFinal += (5000 * quant);
                break;
            case 3:
                resumo.innerHTML += `<p><span class="texto-azul">${quant}x </span>Microfone ATR<span class="texto-azul"> R$${1800 * quant}</span></p>`;
                somaFinal += (1800 * quant);
                break;
        }
        total.innerHTML = `R$${somaFinal}`;
    }
}

function limpar() {
    let soma = []
    somaFinal = 0;
    resumo.innerHTML = '';
    total.innerHTML = `R$${somaFinal}`;
}