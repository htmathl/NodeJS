function calcularDescontoProgressivo(preco) {
    let desconto;
    if (preco <= 100) {
        desconto = 0.05;
    } else if (preco <= 500) {
        desconto = 0.10;
    } else {
        desconto = 0.15;
    }
    const valorDesconto = preco * desconto;
    const precoFinal = preco - valorDesconto;
    console.log(`Preço original: R$${preco.toFixed(2)}`);
    console.log(`Desconto: R$${valorDesconto.toFixed(2)}`);
    console.log(`Preço final: R$${precoFinal.toFixed(2)}`);
}

calcularDescontoProgressivo(250); // Preço original: R$250.00; Desconto: R$25.00; Preço final: R$225.00
