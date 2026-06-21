/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		// 1. Identifica os elementos que já estão selecionados ANTES de remover as classes
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        const personagemSelecionado = document.querySelector(".personagem.selecionado");

		// 2. Chama as funções passando os elementos atuais para que elas saibam o que mudar
        desselecionarBotao(botaoSelecionado);
        desselecionarPersonagem(personagemSelecionado);

		// 3. Adiciona as classes nos novos elementos
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

		// Troca imagem do botão para o GIF
        const imagemBotao = botao.querySelector(".botao img");
        imagemBotao.src = botao.getAttribute("data-gif");
	});
});

// Passamos o botão como parâmetro para saber qual imagem estática restaurar
function desselecionarPersonagem(personagem, botao) {
	if (personagem) {
        personagem.classList.remove("selecionado");
    }
}

// Passamos o botão como parâmetro para saber qual imagem estática restaurar
function desselecionarBotao(botao) {
	if (botao) {
		const imagemBotao = botao.querySelector("img");
        imagemBotao.src = botao.getAttribute("data-estatico");

        botao.classList.remove("selecionado");
	}
}