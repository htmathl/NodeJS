function calcularDesconto(precoOriginal, categoria) {
    let desconto;
    switch (categoria) {
        case 1: desconto = 0.10; break;
        case 2: desconto = 0.20; break;
        case 3: desconto = 0.30; break;
        case 4: desconto = 0.40; break;
        default: desconto = 0; break;
    }
    const precoFinal = precoOriginal * (1 - desconto);
    console.log(`Preço Original: R$${precoOriginal.toFixed(2)}, Desconto: ${(desconto * 100)}%, Preço Final: R$${precoFinal.toFixed(2)}`);
}

calcularDesconto(100, 2); // Preço Original: R$100.00, Desconto: 20%, Preço Final: R$80.00
