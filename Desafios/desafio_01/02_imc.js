function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(`IMC: ${imc.toFixed(2)}`);
}

calcularIMC(70, 1.75); // IMC: 22.86
