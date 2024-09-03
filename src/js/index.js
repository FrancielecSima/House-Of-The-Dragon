// Passo 1 - pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// Passo 2 - identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        // Passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSeleciona();

        // Passo 4 - marcar o botão clicado como se estivesse selecionado
        marcarBotaoSelecionado(botao);

        // Passo 5 - esconder a imagem selecionado anteriormente
        esconderImagemAtiva();

        // Passo 6 - aparecer a imagem selecionada
        mostrarImagemDeFundo(indice);

        // Passo 7 - esconder a informação do dragão anteriormente selecionado
        esconderInformacoesAtivas();

        // Passo 8 - mostrar a informação do dragão anteriormente selecionado
        mostrarInformacoes(indice);
    });
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSeleciona() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
