document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const perguntas = document.querySelectorAll('[data-faq-pergunta]');

    const bannerSection = document.querySelector('.banner');
    const alturaBanner = bannerSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaBanner) {
            ocultaElementosCabecalho();
        } else {
            exibeElementosCabecalho();
        }
    })

    //seção de atrações, programação das abas
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

    //seção FAQ, accordion
    for (let i = 0; i < perguntas.length; i++) {
        perguntas[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosCabecalho() {
    const cabecalho = document.querySelector('header');
    cabecalho.classList.add('cabecalho--is-escondido');
}

function exibeElementosCabecalho() {
    const cabecalho = document.querySelector('header');
    cabecalho.classList.remove('cabecalho--is-escondido');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__perguntas__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

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
