const buttons = document.querySelectorAll('.btns_menu');
const sectionGraficos = document.querySelector('.section_graficos');

const graficos = {
    btn_visao_geral: "graficos.png",
    btn_media_payload: "Media_payload_p_pacote.png", 
    btn_menor_intervalo_pacotes: "Menor_intervalo_entre_pacotes.png",
    btn_menor_intervalo_pacotes_enviados: "Menor_payload_dos_pacotes_enviados.png", 
    btn_bytes_no_subfluxo: "Bytes_no_subfluxo_reverso.png",
    btn_total_Pacotes_enviados: "Total_de_pacotes_enviados.png", 
    btn_menor_payload_fluxo: "Menor_payload_no_fluxo.png",
    btn_menor_tempo_ativo_fluxo: "Menor_tempo_ativo_no_fluxo.png",
    btn_maior_payload_fluxo: "Maior_payload_no_fluxo.png"
};

let botaoSelecionado = null;

function atualizarGrafico(idBotao) {
    sectionGraficos.innerHTML = '';
    const img = document.createElement('img');
    img.src = `../img/Graficos_integrador/${graficos[idBotao]}`;
    img.alt = `Gráfico de ${idBotao}`;
    img.style.width = '80%'; 
    img.style.height = '800px'; 
    sectionGraficos.appendChild(img);

    setTimeout(() => {
        img.classList.add('fade-in');
    }, 10);
}

function atualizarEstiloBotao(botaoAtual) {
    if (botaoSelecionado) {
        botaoSelecionado.style.backgroundColor = '';
        botaoAtual.style.border = '';
        botaoAtual.style.color = '';
    

    }
    botaoAtual.style.backgroundColor = '#9db8e0';
    botaoAtual.style.border = '2px solid white';
    botaoSelecionado = botaoAtual;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const idBotao = button.id;
        atualizarGrafico(idBotao);
        atualizarEstiloBotao(button);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const botaoInicial = document.getElementById('btn_visao_geral');
    atualizarGrafico(botaoInicial.id);
    atualizarEstiloBotao(botaoInicial);
});
