let soma;
let resumo = document.querySelector('#lista-produtos section');
let total = document.getElementById('valor-total');
limpar ();
function adicionar() {
    let produto = document.getElementById('produto').value;
    let produtoNome = produto.split(' - ')[0];
    let produtoValor = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let quantidadeComprimento = document.getElementById('quantidade').value.length;
    if (quantidadeComprimento == 0 || quantidade < 1 || quantidade > 100) {
        window.alert('Informe uma quantidade válida antes de adicionar.')
    } else {
        resumo.innerHTML += `<p><span class="texto-azul">${quantidade}x </span>${produtoNome}<span class="texto-azul"> R$ ${produtoValor}</span></p>`;
        soma += (produtoValor * quantidade);
        total.innerHTML = `R$${soma}`;
    }
    document.getElementById('quantidade').value = '';
}

function limpar() {
    soma = 0;
    resumo.innerHTML = '';
    total.innerHTML = `R$ 0`;
    document.getElementById('quantidade').value = ''
}