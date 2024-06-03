const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você e suas amigas decidem sair no sabado para se divertirem. Em que lugar decidem ir?",
        alternativas: [
            "Shopping Palladium",
            "Park Barigui"
        ]
    },
    {
        enunciado: "Depois de decidirem o lugar onde vão, chegou sabado e é hora de se arrumar, está um dia lindo de sol. Qual roupa voce escolhe usar ?",
        alternativas: [
            "um vestido longo rosa com um tenis branco",
            "uma calça jeans rasgada com um cropeed preto e um tenis preto"
        ]
    },
    {
        enunciado: "Depois de se vestir neste dia lindo de sol. Voce prefere qual maquiagem ?",
        alternativas: [
            "maquiagem mais basica (só corretivo de blush)",
            "uma maquiagem mais pesada (com base, corretivo,contorno,iluminador e blush)"
        ]
    },
    {
        enunciado: "Depois de pronta voce e sua amiga saem de casa e se divertem muito mas, derepente sentem uma fome. Voces escolhem comer no lugar onde estão ou ir para outro lugar ?",
        alternativas: [
            "comer no lugar onde estão ",
            "ir para outro lugar"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

