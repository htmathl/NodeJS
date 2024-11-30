function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    console.log(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
}

calcularIMC(70, 1.75); // Seu IMC é 22.86. Classificação: Peso normal
