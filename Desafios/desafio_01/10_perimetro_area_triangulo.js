function calcularRetangulo(largura, comprimento) {
    const perimetro = 2 * (largura + comprimento);
    const area = largura * comprimento;
    console.log(`Perímetro: ${perimetro}, Área: ${area}`);
}

calcularRetangulo(5, 10); // Perímetro: 30, Área: 50
