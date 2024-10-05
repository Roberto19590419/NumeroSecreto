// let titulo = document.querySelector("h1");
// titulo.innerHTML = "jogo do Número Secreto";

// let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

// Criando a variável numeroSecreto que receberá o valor passado pela função gerarNumeroAleatório()
let numeroSecreto = gerarNumeroAleatório();

// Criando a função exibirTextoNaTela(tag) que pega o conteúdo da tag que é um texto
function exibirTextoNaTela(tag) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Ao executar a função exibirTextoNaTela com o parâmetro h1 e o texto jogo do Número Secreto
// a função exibe o título na tela.
exibirTextoNaTela("h1", "jogo do Número Secreto");

// Ao executar a função exibirTextoNaTela com o parâmetro p e o texto Escolha um número entre 
// 1 e 10, a função exibe o o texto na tela.
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

// Nesse caso a função verificarChute() apenas verifica qual foi o chute dado e mostra no
// console.log. É apenas um controle do desenvolvedor para verificar o funcionamento do código.
function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}

// Essa função gera o numero aleatório, multiplica por 10, soma + 1, com o parseInt, ele 
// deixa apenas um número inteiro e retorna esse resultado para a função quando ela é chamada,
// passando esse resultado para a variável numeroSecreto.
function gerarNumeroAleatório() {
    return parseInt(math.random() * 10 + 1);
}