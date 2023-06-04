//variaveis
const resultado = document.getElementById('resultado');

//Eventos 
const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');
calcular.addEventListener('click', calcularImc);
limpar.addEventListener('click', limparCampos);

function limparCampos() {

    var nomeInput = document.getElementById("nome");
    nomeInput.value = null;

    var alturaInput = document.getElementById("altura");
    alturaInput.value = null;

    var pesoInput = document.getElementById("peso");
    pesoInput.value = null;

    resultado.textContent = null;
}

function calcularImc() {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'dentro do peso ideal.'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.'
        } else {
            classificacao = 'obesidade morbida.'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} você esta ${classificacao} `;

    } else {
        resultado.textContent = 'Preecha todos os campos!!!'
    }

}

