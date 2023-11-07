document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add('atracoes__lista--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('atracoes__abas__botao--is-active')
        })
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('atracoes__abas__botao--is-active'); 
        }
}
function escondeAbas() {
    const abaConteudo = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < abaConteudo.length; i++) {
        abaConteudo[i].classList.remove('atracoes__lista--is-active');
    }
}
