
const botaoCalcular = document.getElementById('calcular')

function calculaImc() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('mensagem-resultado')

    if (nome != '' && peso != '' && altura != '') {
        
        const valorImc = (peso / (altura ** 2)).toFixed(2);
        let classificação

        if (valorImc < 18.5) {
         
            resultado.textContent = `${nome} seu IMC é ${valorImc}, e você está abaixo do peso.`
        
        } else if (valorImc >= 18.5 && valorImc <= 24.9) {

             resultado.textContent = `${nome} seu IMC é ${valorImc}, e você está com o peso ideal.`

        } else if (valorImc >= 25 && valorImc <= 29.9) {

            resultado.textContent = `${nome} seu IMC é ${valorImc}, e você está acima do peso.`

        } else if (valorImc >= 30 && valorImc <= 34.9) {

            resultado.textContent = `${nome} seu IMC é ${valorImc}, e você está com obesidade grau 1.`

        } else if (valorImc >= 35 && valorImc <= 39.9) {

             resultado.textContent = `${nome} seu IMC é ${valorImc}, e você está com obesidade grau 2.`
        
        } else {
            resultado.textContent = `${nome} seu IMC é ${valorImc}, e você está com obesidade mórbida.`
        }

    } else {
        resultado.textContent = 'Preencha todos os campos antes de executar o cálculo.'
    }

}

botaoCalcular.addEventListener('click', calculaImc)