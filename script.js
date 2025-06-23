const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Escolha seu nome",
        alternativas: [
            {
                texto: "Maya.",
                afirmacao: "Maya! você chegou até aqui.."
            },
            {
                texto: "Matteo.",
                afirmacao: "Matteo! Você chegou até aqui.."
            }
        ]
    },
    {
        enunciado: " Agora que você tem um nome, escolha como será a sua vida..",
        alternativas: [
            {
                texto: "Você mora sozinho (a), tem 19 anos e muitos planos para o futuro, uma pessoa sonhadora, não tem um relacionamento, mas sonha com uma famiĺia feliz.",
                afirmacao: "Você sobreviveu!! Sua casa foi saqueada, mas o exército te deu uma nova, em outra cidade, uma nova oportunidade."
            },
            {
                texto: "Você mora com sua seus pais, tem uma vida simples e feliz, com 19 anos já viveu muitas aventuras. Seu sonho era servir o exército, mas te dispensaram por lotação.",
                afirmacao: "Infelizmente sua mãe faleceu, mas sua familía está muito feliz em te receber de volta."
            }
        ]
    },
    {
        enunciado: " Agora que já temos um personagem, vamos começar? O ano era 2001, você estava trabalhando quando chega em casa e recebe a notícia que o país entrou em guerra e está convocando todos os jovens, incluindo mulheres de 18-30 anos, e você teria que servir, como você se sente nessa situação?",
        alternativas: [
            {
                texto: "Me sinto desesperado(a).",
                afirmacao: "Você sobreviveu, após muito sacrificio"
            },
            {
                texto: "sinto que é a hora de cumprir a minha missão na terra.",
                afirmacao: "Você sobreviveu, porém teve muita sequelas, lutou com garras e dentes para dar o seu melhor."
            }
        ]
    },
    {
        enunciado: "No dia seguinte você já estava em campo, só deu tempo de pegar algumas roupas e um item pessoal,  o que você pegou?",
        alternativas: [
            {
                texto: "Um diário",
                afirmacao: ""
            },
            {
                texto: "Uma foto da sua mãe",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " ",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " ",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " ",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " ",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
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
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();Me