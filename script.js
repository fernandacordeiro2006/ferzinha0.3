const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você e suas amigas decidem sair no sabado para se divertirem. Em que lugar decidem ir?",
        alternativas: [
            {
                texto: "parque barigui",
                afirmacao: "parque barigui"
            },
            {
                texto: "shopping palladium",
                afirmacao: "shopping palladium"
            }
        ]

    },
    {
        enunciado: "Depois de decidirem o lugar onde vão, chegou sabado e é hora de se arrumar, está um dia lindo de sol. Qual roupa voce escolhe usar ?",
        alternativas: [
            {
                texto: "um vestido longo rosa com um tenis branco ",
                afirmacao: "uma calça jeans rasgada com um cropeed preto e um tenis preto"
            },
            {
                texto: "um vestido longo rosa com um tenis branco ",
                afirmacao: "uma calça jeans rasgada com um cropeed preto e um tenis preto"
            }
  
        ]
    },
    {
        enunciado: "Depois de se vestir neste dia lindo de sol. Voce prefere qual maquiagem ?",
        alternativas: [
            {
                texto: "maquiagem mais basica (só corretivo de blush)",
                afirmacao: "uma maquiagem mais pesada (com base, corretivo,contorno,iluminador e blush)"
            },
            {
                texto: "maquiagem mais basica (só corretivo de blush)",
                afirmacao: "uma maquiagem mais pesada (com base, corretivo,contorno,iluminador e blush)"
            }
          
        ]
    },
    {
        enunciado: "Depois de pronta voce e sua amiga saem de casa e se divertem muito mas, derepente sentem uma fome. Voces escolhem comer no lugar onde estão ou ir para outro lugar ?",
        alternativas: [
            {
                texto: "comer no lugar onde estão ",
                afirmacao: "ir para outro lugar "
            },
            {
                texto: "comer no lugar onde estão ",
                afirmacao: "ir para outro lugar "
         }
        ]    
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpar alternativas antes de adicionar novas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "; // Concatenar a afirmação selecionada na história final
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final da tosa:"; // Texto final ajustado
    textoResultado.textContent = historiaFinal.trim(); // Mostrar a história final completa
    caixaAlternativas.textContent = ""; // Limpar alternativas
}


mostraPergunta();
