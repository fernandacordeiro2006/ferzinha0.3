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
        afirmacao: [
            "parque barigui",
            "elas foram para o parque barigui"
        ]
    },
    {
        texto: "shopping palladium",
        afirmacao: [
            "shopping palladium",
            "elas foram para o shopping palladium"
        ]
    }
]
    },
    {
        enunciado: "Depois de decidirem o lugar onde vão, chegou sabado e é hora de se arrumar, está um dia lindo de sol. Qual roupa voce escolhe usar ?",
       alternativas: [
    {
        texto: "um vestido longo rosa com umtenis branco",
        afirmacao: [
            "um vestido longo com um tenis branco",
            "ela escolheu o vestido com o tenis"
        ]
    },
    {
        texto: "uma calça jeans rasgada com cropeed preto",
        afirmacao: [
            "calça rasgada jeans com cropeed preto",
            "ela escolheu a calça jeans e cropped preto"
        ]
    }
]
    },
    {
        enunciado: "Depois de se vestir neste dia lindo de sol. Voce prefere qual maquiagem ?",
        alternativas: [
    {
        texto: "maquiagem mais basica",
        afirmacao: [
            "maquiagem basica",
            "ela escolheu uma maquiagem mais basica"
        ]
    },
    {
        texto: "maquiagem mais pesada",
        afirmacao: [
            "maquiagem mais pesada",
            "ela escolheu a maquiagem mais pesada"
        ]
    }
]
    },
    {
        enunciado: "Depois de pronta voce e sua amiga saem de casa e se divertem muito mas, derepente sentem uma fome. Voces escolhem comer no lugar onde estão ou ir para outro lugar ?",
       alternativas: [
    {
        texto: "comer no lugar onde estão",
        afirmacao: [
            "comer onde estão",
            "elas escolheram comer onde estavam"
        ]
    },
    {
        texto: "ir para outro lugar",
        afirmacao: [
            "comer em outro lugar",
            "foram comer em outro lugar"
         }
           
        ]    
    },
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

function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final da tosa:"; // Texto final ajustado
    textoResultado.textContent = historiaFinal.trim(); // Mostrar a história final completa
    caixaAlternativas.textContent = ""; // Limpar alternativas
}

function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}

mostraPergunta();
