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
                texto: "shopping palladium",
                afirmacao: "parque barigui"
            },
            {
                texto: "shopping palladium",
                afirmacao: "parque barigui"
            }
        ]
},

    },
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia"
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }
        ]
},

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

